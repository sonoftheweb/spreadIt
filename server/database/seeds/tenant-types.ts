import { useDrizzle } from "../../utils/drizzle";
import { tenantTypes } from "../schema";

/**
 * Seed tenant types data
 */
export async function seedTenantTypes() {
  const db = useDrizzle();
  
  // Base tenant types to be seeded
  const types = [
    {
      name: "Landlord",
      key: "landlord",
    },
    {
      name: "Tenant",
      key: "tenant",
    }
  ];
  
  console.log("Seeding tenant types...");
  
  // Insert or ignore if already exists
  for (const type of types) {
    try {
      await db.insert(tenantTypes)
        .values(type)
        .onConflictDoNothing({ target: tenantTypes.key })
        .execute();
      
      console.log(`Tenant type "${type.name}" seeded successfully.`);
    } catch (error) {
      console.error(`Error seeding tenant type "${type.name}":`, error);
    }
  }
}
