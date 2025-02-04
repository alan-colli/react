import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "postgres", // Seu usuário do PostgreSQL
  host: "localhost", // Host padrão
  database: "JWT_AUTH", // Nome do banco de dados
  password: "alan", // Sua senha do PostgreSQL
  port: 5432, // Porta padrão do PostgreSQL
});

// async function testConnection() {
//   try {
//     // Testar se a conexão funciona executando uma consulta simples
//     const res = await pool.query("SELECT NOW()"); // Retorna a hora atual do servidor
//     console.log("Conexão bem-sucedida com o PostgreSQL!", res.rows);
//   } catch (err) {
//     console.error("Erro na conexão com o PostgreSQL:", err);
//   }
// }

// testConnection();
