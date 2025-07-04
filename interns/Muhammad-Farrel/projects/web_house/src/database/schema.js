import { int, mysqlTable, text, timestamp } from "drizzle-orm/mysql-core";
import express from "express";
import { db } from "./db.js";

const router = express.Router();

export const categories = mysqlTable("categories", {
  id_category: int("id_category").primaryKey().autoincrement(),
  nameCat: text("nameCat").notNull(),
  detail: text("detail").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export const house = mysqlTable("house", {
  id_house: int("id_house").primaryKey().autoincrement(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  price: text("price").notNull(),
  bed: int("bed").notNull(),
  bath: int("bath").notNull(),
  sqft: text("sqft").notNull(),
  picture: text("picture").notNull(),
  category_id: int("category_id")
    .notNull()
    .references(() => categories.id_category),
  seller: text("seller").notNull(),
  contact: text("contact").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export const buyers = mysqlTable("buyers", {
  id_buyers: int("id_buyers").primaryKey().autoincrement(),
  house_id: int("house_id").notNull().references(() => house.id_house),
  nameB: text("nameB").notNull(),
  contact: text("contact").notNull(),
  location: text("location").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export default router;
