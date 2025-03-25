import { pool } from "./db.js";

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Conexão bem-sucedida!");
    client.release();
  } catch (err) {
    console.error("Erro na conexão:", err);
  }
}

testConnection();
