import { sqliteTable, text, integer, uniqueIndex } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { files } from "./files";
import { dataValues } from "./dataValues";

/**
 * ColumnsMetadata table schema
 */
export const columnsMetadata = sqliteTable("columns_metadata", {
  columnId: integer("column_id").primaryKey({ autoIncrement: true }),
  fileId: integer("file_id").notNull().references(() => files.fileId),
  columnName: text("column_name").notNull(),
  detectedDataType: text("detected_data_type").notNull(),
}, (table) => ({
  fileColumnIdx: uniqueIndex("file_column_idx").on(table.fileId, table.columnName),
}));

/**
 * ColumnsMetadata table relations
 */
export const columnsMetadataRelations = relations(columnsMetadata, ({ one, many }) => ({
  file: one(files, {
    fields: [columnsMetadata.fileId],
    references: [files.fileId],
  }),
  dataValues: many(dataValues),
}));