import { defineConfig } from "drizzle-kit"
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  schema: "./src/database/schema.js",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS || undefined,
    database: process.env.DB_NAME,
  }
});

