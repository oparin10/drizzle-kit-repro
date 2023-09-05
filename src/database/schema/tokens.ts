import {
  AnySQLiteColumn,
  integer,
  sqliteTable as table,
  text,
} from "drizzle-orm/sqlite-core";
import { candidate } from "./candidate";
import { sql } from "drizzle-orm";

export var tokens = table("tokens", {
  id: integer("id").primaryKey().notNull(),
  value: text("value").notNull(),
  candidateId: integer("candidate_id")
    .notNull()
    .references((): AnySQLiteColumn => candidate.id),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`(strftime('%s', 'now'))`)
    .notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" })
    .default(sql`datetime('now', +1 day)`)
    .notNull(),
  revokedAt: integer("revoked_at", { mode: "timestamp" }),
});
