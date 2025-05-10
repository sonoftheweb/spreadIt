// Import tables and relations from their respective files
import {
  users,
  tenants,
  tenantUser,
  passwordResetTokens,
  personalAccessTokens,
  failedJobs,
  jobs
} from "./tables";

import {
  usersRelations,
  tenantsRelations,
  tenantUserRelations,
  personalAccessTokensRelations
} from "./relations";

// Export everything to maintain compatibility with existing code
export {
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
  personalAccessTokensRelations
};
