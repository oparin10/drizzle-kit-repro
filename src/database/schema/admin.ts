import { integer, sqliteTable as table, text } from "drizzle-orm/sqlite-core";

export var admin = table("admins", {
  id: integer("id").primaryKey().notNull(),
  firstName: text("first_name", { length: 255 }).notNull(),
  lastName: text("last_name", { length: 255 }).notNull(),
  email: text("email", { length: 255 }).notNull(),
});
