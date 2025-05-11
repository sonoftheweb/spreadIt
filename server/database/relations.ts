import { relations } from "drizzle-orm";
import { users, tenants, tenantTypes, tenantUser, personalAccessTokens } from "./tables";

/**
 * Users table relations
 */
export const usersRelations = relations(users, ({ one, many }) => ({
  tenantUsers: many(tenantUser),
  personalTokens: many(personalAccessTokens, {
    relationName: "userPersonalTokens",
  }),
  activeTenant: one(tenants, {
    fields: [users.lastActiveTenantId],
    references: [tenants.id],
  }),
}));

/**
 * Tenant Types table relations
 */
export const tenantTypesRelations = relations(tenantTypes, ({ many }) => ({
  tenants: many(tenants),
}));

/**
 * Tenants table relations
 */
export const tenantsRelations = relations(tenants, ({ one, many }) => ({
  owner: one(users, {
    fields: [tenants.ownerId],
    references: [users.id],
    relationName: "tenantOwner",
  }),
  type: one(tenantTypes, {
    fields: [tenants.typeId],
    references: [tenantTypes.id],
  }),
  tenantUsers: many(tenantUser),
}));

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

/**
 * Personal Access Tokens relations
 */
export const personalAccessTokensRelations = relations(
  personalAccessTokens,
  ({ one }) => ({
    // This is a polymorphic relation in SQL terms
    // In Drizzle, we need to handle this differently since true polymorphic relations aren't directly supported
    // This is a simplification - in a real implementation you would need to check tokenableType
    user: one(users, {
      // This assumes tokenableId is a user id when tokenableType is 'user'
      fields: [personalAccessTokens.tokenableId],
      references: [users.id],
      relationName: "userPersonalTokens",
    }),
  }),
);
