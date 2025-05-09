import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
export { sql, eq, and, or } from "drizzle-orm";

import * as schema from "../database/schema";

export const tables = schema;

export function useDrizzle() {
  const dbUrl = process.env.DATABASE_URL || "file:./sqlite.db";
  // Remove 'file:' prefix if present
  const filePath = dbUrl.replace(/^file:/, "");
  const sqlite = new Database(filePath);
  return drizzle(sqlite, { schema });
}

export type User = typeof schema.users.$inferSelect;
export type NewUser = typeof schema.users.$inferInsert;

export type Session = typeof schema.sessions.$inferSelect;
export type NewSession = typeof schema.sessions.$inferInsert;

export type File = typeof schema.files.$inferSelect;
export type NewFile = typeof schema.files.$inferInsert;

export type Row = typeof schema.rows.$inferSelect;
export type NewRow = typeof schema.rows.$inferInsert;

export type ColumnMetadata = typeof schema.columnsMetadata.$inferSelect;
export type NewColumnMetadata = typeof schema.columnsMetadata.$inferInsert;

export type DataValue = typeof schema.dataValues.$inferSelect;
export type NewDataValue = typeof schema.dataValues.$inferInsert;
