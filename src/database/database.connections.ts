import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;
const configDatabase: Object = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.mode === "prod" ? true : false,
};

const db = new Pool(configDatabase);

export default db;

