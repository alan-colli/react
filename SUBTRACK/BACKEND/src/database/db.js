import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "SUBTRACK",
  password: "alan",
  port: 5432,
});
