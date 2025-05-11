import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as orm from "drizzle-orm";

import * as schema from "../database/schema";

export { orm };

export const tables = schema;

/**
 * Creates and returns a Drizzle ORM instance connected to the SQLite database
 */
export function useDrizzle() {
  const dbUrl = process.env.DATABASE_URL || "file:./dev.db";
  
  // Create libSQL client
  const client = createClient({
    url: dbUrl,
  });
  
  // Return drizzle instance
  return drizzle(client, { schema });
}

export type User = typeof schema.users.$inferSelect;
export type NewUser = typeof schema.users.$inferInsert;

export type Tenant = typeof schema.tenants.$inferSelect;
export type NewTenant = typeof schema.tenants.$inferInsert;

export type TenantUser = typeof schema.tenantUser.$inferSelect;
export type NewTenantUser = typeof schema.tenantUser.$inferInsert;

export type PasswordResetToken = typeof schema.passwordResetTokens.$inferSelect;
export type NewPasswordResetToken =
  typeof schema.passwordResetTokens.$inferInsert;

export type PersonalAccessToken =
  typeof schema.personalAccessTokens.$inferSelect;
export type NewPersonalAccessToken =
  typeof schema.personalAccessTokens.$inferInsert;

export type FailedJob = typeof schema.failedJobs.$inferSelect;
export type NewFailedJob = typeof schema.failedJobs.$inferInsert;

export type Job = typeof schema.jobs.$inferSelect;
export type NewJob = typeof schema.jobs.$inferInsert;
