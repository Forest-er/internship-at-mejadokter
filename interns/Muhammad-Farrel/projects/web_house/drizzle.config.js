import { Config } from "drizzle-kit"

export default {
    schema: './src/database/schema.js',
    out: './drizzle',
    driver:'mysql2',
    dbCredentials: {
        connectionString:process.env.DATABASE_URL,
    },
}