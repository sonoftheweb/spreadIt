import { seedTenantTypes } from "./tenant-types";

/**
 * Main seed execution function that runs all seeders in sequence
 */
export async function runAllSeeds() {
  try {
    console.log("Starting database seeding...");
    
    // Run all seed functions in the correct order
    // Order matters if there are dependencies between seeds
    await seedTenantTypes();
    
    // Add more seed functions here as they are created
    // await seedUsers();
    // await seedTenants();
    
    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error during database seeding:", error);
    process.exit(1);
  }
}

// Execute seeds if this file is run directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  runAllSeeds()
    .then(() => process.exit(0))
    .catch(err => {
      console.error("Failed to run seeds:", err);
      process.exit(1);
    });
}
