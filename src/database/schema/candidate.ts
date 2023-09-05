import {
  AnySQLiteColumn,
  integer,
  sqliteTable as table,
  text,
} from "drizzle-orm/sqlite-core";
import { tokens } from "./tokens";
import { passwordToken } from "./password_token";

export const candidate = table("candidates", {
  id: integer("id").primaryKey().notNull(),
  username: text("username").notNull(),
  phoneNumber: text("phone_number").notNull(),
  password: text("password").notNull(),
  tokens: integer("tokens")
    .notNull()
    .references(() => tokens.id),
  passwordTokens: integer("password_tokens")
    .notNull()
    .references((): AnySQLiteColumn => passwordToken.id),
});

export type CandidateInsert = typeof candidate.$inferInsert;
export type CandidateSelect = typeof candidate.$inferSelect;
