import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

/**
 * Users table schema
 */
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerifiedAt: integer("email_verified_at", { mode: "timestamp" }),
  password: text("password").notNull(),
  rememberToken: text("remember_token", { length: 100 }),
  approved: integer("approved").default(0),
  lastActiveTenantId: text("last_active_tenant_id"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(unixepoch())`),

  deletedAt: integer("deleted_at", { mode: "timestamp" }),
});

/**
 * Tenants table schema
 */
export const tenants = sqliteTable("tenants", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  domain: text("domain").unique(),
  ownerId: text("owner_id"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(unixepoch())`),

  deletedAt: integer("deleted_at", { mode: "timestamp" }),
});

/**
 * Tenant User pivot table schema
 */
export const tenantUser = sqliteTable(
  "tenant_user",
  {
    userId: text("user_id").notNull(),
    tenantId: text("tenant_id").notNull(),
    role: text("role"),
    joinedAt: integer("joined_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.tenantId, table.userId] }),
  }),
);

/**
 * Password Reset Tokens table schema
 */
export const passwordResetTokens = sqliteTable("password_reset_tokens", {
  email: text("email").notNull(),
  token: text("token").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),

});

/**
 * Personal Access Tokens table schema
 */
export const personalAccessTokens = sqliteTable("personal_access_tokens", {
  id: text("id").primaryKey(),
  tokenableType: text("tokenable_type").notNull(),
  tokenableId: text("tokenable_id").notNull(),
  name: text("name").notNull(),
  token: text("token").notNull().unique(),
  abilities: text("abilities"),
  lastUsedAt: integer("last_used_at", { mode: "timestamp" }),
  expiresAt: integer("expires_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
});

/**
 * Failed Jobs table schema
 */
export const failedJobs = sqliteTable("failed_jobs", {
  id: text("id").primaryKey(),
  uuid: text("uuid").notNull().unique(),
  connection: text("connection").notNull(),
  queue: text("queue").notNull(),
  payload: text("payload").notNull(),
  exception: text("exception").notNull(),
  failedAt: integer("failed_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
});

/**
 * Jobs table schema
 */
export const jobs = sqliteTable("jobs", {
  id: text("id").primaryKey(),
  queue: text("queue").notNull(),
  payload: text("payload").notNull(),
  attempts: integer("attempts").notNull(),
  reservedAt: integer("reserved_at", { mode: "timestamp" }),
  availableAt: integer("available_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
});
