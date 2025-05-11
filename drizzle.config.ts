import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "file:./sqlite.db",
  },
  schema: "./server/database/schema.ts",
  out: "./server/database/migrations",
});
