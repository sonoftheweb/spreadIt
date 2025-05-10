import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Personal Access Tokens table schema
 * 
 * Implements Laravel Sanctum's personal access tokens for API authentication
 * in a decoupled frontend/backend architecture.
 */
export const personalAccessTokens = sqliteTable("personal_access_tokens", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  tokenableType: text("tokenable_type").notNull(),
  tokenableId: text("tokenable_id").notNull(),
  name: text("name").notNull(),
  token: text("token").notNull().unique(),
  abilities: text("abilities"),
  lastUsedAt: integer("last_used_at", { mode: "timestamp" }),
  expiresAt: integer("expires_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).defaultNow(),
});