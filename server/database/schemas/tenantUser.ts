import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { tenants, users } from "../schema";

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
      .defaultNow(),
    createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.tenantId, table.userId] }),
  })
);

/**
 * TenantUser table relations
 */
export const tenantUserRelations = relations(tenantUser, ({ one }) => ({
  user: one(users, {
    fields: [tenantUser.userId],
    references: [users.id],
  }),
  tenant: one(tenants, {
    fields: [tenantUser.tenantId],
    references: [tenants.id],
  }),
}));