import { runAllSeeds } from "./seeds";

// Execute the seed function
runAllSeeds()
  .then(() => {
    console.log("✅ All seeds completed successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error running seeds:", err);
    process.exit(1);
  });
