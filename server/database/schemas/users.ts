import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { tenants, tenantUser } from "../schema";

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
  lastActiveTenantId: text("last_active_tenant_id"),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).defaultNow(),
  deletedAt: integer("deleted_at", { mode: "timestamp" }),
});

/**
 * Users table relations
 */
export const usersRelations = relations(users, ({ one, many }) => ({
  tenantUsers: many(tenantUser),
}));
