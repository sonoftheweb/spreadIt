import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Failed Jobs table schema
 * 
 * Stores background jobs that failed during execution.
 * Follows the Laravel convention for failed jobs tracking.
 */
export const failedJobs = sqliteTable("failed_jobs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  uuid: text("uuid").notNull().unique(),
  connection: text("connection").notNull(),
  queue: text("queue").notNull(),
  payload: text("payload").notNull(),
  exception: text("exception").notNull(),
  failedAt: integer("failed_at", { mode: "timestamp" }).notNull().defaultNow(),
});