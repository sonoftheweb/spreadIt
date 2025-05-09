import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { sessions } from "./sessions";

/**
 * Files table schema
 */
export const files = sqliteTable("files", {
  fileId: integer("file_id").primaryKey({ autoIncrement: true }),
  sessionId: integer("session_id").notNull().references(() => sessions.sessionId),
  originalFilename: text("original_filename").notNull(),
  uploadTimestamp: integer("upload_timestamp", { mode: "timestamp" }).notNull().defaultNow(),
});

/**
 * Files table relations
 */
export const filesRelations = relations(files, ({ one, many }) => ({
  session: one(sessions, {
    fields: [files.sessionId],
    references: [sessions.sessionId],
  }),
  rows: many(/* rows */), // Will be imported and properly referenced once rows.ts is created
}));