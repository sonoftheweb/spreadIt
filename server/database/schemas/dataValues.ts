import { sqliteTable, text, integer, real, uniqueIndex } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { rows } from "./rows";
import { columnsMetadata } from "./columnsMetadata";

/**
 * DataValues table schema
 */
export const dataValues = sqliteTable("data_values", {
  valueId: integer("value_id").primaryKey({ autoIncrement: true }),
  rowId: integer("row_id").notNull().references(() => rows.rowId),
  columnId: integer("column_id").notNull().references(() => columnsMetadata.columnId),
  
  // Value columns - only one will be populated per row based on the detected_data_type
  valueText: text("value_text"),
  valueInteger: integer("value_integer"),
  valueReal: real("value_real"),
  valueDateTime: text("value_datetime"),
  valueBoolean: integer("value_boolean", { mode: "boolean" }),
}, (table) => ({
  rowColumnIdx: uniqueIndex("row_column_idx").on(table.rowId, table.columnId),
}));

/**
 * DataValues table relations
 */
export const dataValuesRelations = relations(dataValues, ({ one }) => ({
  row: one(rows, {
    fields: [dataValues.rowId],
    references: [rows.rowId],
  }),
  column: one(columnsMetadata, {
    fields: [dataValues.columnId],
    references: [columnsMetadata.columnId],
  }),
}));