import pool from "./index.js"; // Substitua pelo caminho correto

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conectado ao PostgreSQL!", res.rows[0]);
  } catch (err) {
    console.error("Erro na conexão:", err);
  }
}

testConnection();
