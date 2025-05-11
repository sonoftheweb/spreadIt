import { z } from "zod";
import { createId } from "@paralleldrive/cuid2";
import { hash } from "bcrypt";
import { useDrizzle, orm } from "~/server/utils/drizzle";
import { users } from "~/server/database/schema";

// Define a schema for user registration validation
const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event);
    
    // Validate the input data
    const result = userSchema.safeParse(body);
    if (!result.success) {
      return {
        status: "error",
        message: "Validation failed",
        errors: result.error.errors,
      };
    }
    
    const { name, email, password } = result.data;
    
    // Hash the password securely
    const hashedPassword = await hash(password, 10);
    
    // Get database connection
    const db = useDrizzle();
    
    // Check if email already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(orm.sql`${users.email} = ${email}`)
      .execute();
    
    if (existingUser.length > 0) {
      return {
        status: "error",
        message: "Email already in use",
      };
    }
    
    // Generate a unique ID for the user
    const userId = createId();
    
    // Create the user
    await db.insert(users).values({
      id: userId,
      name,
      email,
      password: hashedPassword,
      approved: 0,
    }).execute();
    
    // Return success response (without the password)
    return {
      status: "success",
      message: "User registered successfully",
      user: {
        id: userId,
        name,
        email,
      },
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      status: "error",
      message: "An error occurred during registration",
    };
  }
});
