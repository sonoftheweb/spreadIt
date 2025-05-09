import { sqliteTable, text, integer, uniqueIndex } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { files } from "./files";
import { dataValues } from "./dataValues";

/**
 * Rows table schema
 */
export const rows = sqliteTable("rows", {
  rowId: integer("row_id").primaryKey({ autoIncrement: true }),
  fileId: integer("file_id").notNull().references(() => files.fileId),
  rowNumberInFile: integer("row_number_in_file").notNull(),
}, (table) => ({
  fileRowIdx: uniqueIndex("file_row_idx").on(table.fileId, table.rowNumberInFile),
}));

/**
 * Rows table relations
 */
export const rowsRelations = relations(rows, ({ one, many }) => ({
  file: one(files, {
    fields: [rows.fileId],
    references: [files.fileId],
  }),
  dataValues: many(dataValues),
}));