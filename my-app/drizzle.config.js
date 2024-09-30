import { Connection } from "@neondatabase/serverless";

export default {
    dialect:'postgresql',
    schema: './utils/database/schema.ts',
    out: './drizzle',

    dbCredentials: {
        url: process.env.DATABASE_URL,
        ConnectionString: process.env.DATABASE_URL,
        
    }
}