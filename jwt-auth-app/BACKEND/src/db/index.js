import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres", // Seu usuário do PostgreSQL
  host: "localhost", // Host padrão
  database: "users", // Nome do banco de dados
  password: "alan", // Sua senha do PostgreSQL
  port: 5432, // Porta padrão do PostgreSQL
});

export const query = (text, params) => pool.query(text, params);

export default pool;
