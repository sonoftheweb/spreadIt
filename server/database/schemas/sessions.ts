import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { files } from "./files";

/**
 * Sessions table schema
 */
export const sessions = sqliteTable("sessions", {
  sessionId: integer("session_id").primaryKey({ autoIncrement: true }),
  sessionName: text("session_name").notNull().unique(),
  uploadTimestamp: integer("upload_timestamp", { mode: "timestamp" }).notNull().defaultNow(),
});

/**
 * Sessions table relations
 */
export const sessionsRelations = relations(sessions, ({ many }) => ({
  files: many(files),
}));