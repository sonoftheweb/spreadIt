// Import all schema components from the schemas directory
import * as schemas from "./schemas/index";

// Re-export everything to maintain compatibility with existing code
export const {
  // Tables
  users,
  tenants,
  tenantUser,
  passwordResetTokens,
  personalAccessTokens,
  failedJobs,
  jobs,

  // Relations
  usersRelations,
  tenantsRelations,
  tenantUserRelations,
} = schemas;
