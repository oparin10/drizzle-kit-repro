import { integer, sqliteTable as table, text } from "drizzle-orm/sqlite-core";

export var company = table("company", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
});
