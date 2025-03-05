import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Conexão bem-sucedida!");
    client.release();
  } catch (error) {
    console.error("Erro na conexão:", error);
  }
}

testConnection();
