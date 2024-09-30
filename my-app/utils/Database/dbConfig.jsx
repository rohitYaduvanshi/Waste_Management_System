// postgresql://Waste_Mgmt_Sys_Database_owner:PFo2gltmG6bS@ep-delicate-lab-a5fabhaj.us-east-2.aws.neon.tech/Waste_Mgmt_Sys_Database?sslmode=require


import {neon} from '@neondatabase/serverless'

import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from './schema'

const sql = neon(process.env.DATABASE_URL)

export const db = drizzle(sql, {schema})