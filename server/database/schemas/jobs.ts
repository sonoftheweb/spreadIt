import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Jobs table schema
 * 
 * Stores queued background jobs waiting to be processed.
 * Follows the Laravel queue jobs table structure.
 */
export const jobs = sqliteTable("jobs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  queue: text("queue").notNull(),
  payload: text("payload").notNull(),
  attempts: integer("attempts").notNull(),
  reservedAt: integer("reserved_at"),
  availableAt: integer("available_at").notNull(),
  createdAt: integer("created_at").notNull(),
});