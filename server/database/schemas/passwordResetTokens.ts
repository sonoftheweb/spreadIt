import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Password Reset Tokens table schema
 * 
 * Stores tokens for password reset functionality.
 * Follows the Laravel convention for password reset tokens.
 */
export const passwordResetTokens = sqliteTable("password_reset_tokens", {
  email: text("email").primaryKey(),
  token: text("token").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
});