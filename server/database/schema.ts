// Import tables and relations from their respective files
import {
  users,
  tenants,
  tenantTypes,
  tenantUser,
  passwordResetTokens,
  personalAccessTokens,
  failedJobs,
  jobs
} from "./tables";

import {
  usersRelations,
  tenantsRelations,
  tenantTypesRelations,
  tenantUserRelations,
  personalAccessTokensRelations
} from "./relations";

export {
  // Tables
  users,
  tenants,
  tenantTypes,
  tenantUser,
  passwordResetTokens,
  personalAccessTokens,
  failedJobs,
  jobs,

  // Relations
  usersRelations,
  tenantsRelations,
  tenantTypesRelations,
  tenantUserRelations,
  personalAccessTokensRelations
};
