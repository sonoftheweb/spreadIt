// Import all schema components from the schemas directory
import * as schemas from "./schemas/index";

// Re-export everything to maintain compatibility with existing code
export const {
  // Tables
  users,
  sessions,
  files,
  rows,
  columnsMetadata,
  dataValues,

  // Relations
  usersRelations,
  sessionsRelations,
  filesRelations,
  rowsRelations,
  columnsMetadataRelations,
  dataValuesRelations,
} = schemas;
