import {
  AnySQLiteColumn,
  integer,
  sqliteTable as table,
  text,
} from "drizzle-orm/sqlite-core";
import { admin } from "./admin";
import { sql } from "drizzle-orm";

export const adminToken = table("admin_tokens", {
  id: integer("id").primaryKey().notNull(),
  value: text("value").notNull(),
  adminId: integer("admin_id")
    .notNull()
    .references((): AnySQLiteColumn => admin.id),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`(strftime('%s', 'now'))`)
    .notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" })
    .default(sql`datetime('now', +1 day)`)
    .notNull(),
  revokedAt: integer("revoked_at", { mode: "timestamp" }),
});

export type AdminTokenInsert = typeof adminToken.$inferInsert;
export type AdminTokenSelect = typeof adminToken.$inferSelect;
