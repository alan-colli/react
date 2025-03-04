import { pool } from "../database/db.js";

export const getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

export const postNewUser = async (name, email, password_hash) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password_hash]
  );
  return result.rows[0];
};

export const putUserByEmail = async (name, email, password_hash, id) => {
  const result = await pool.query(
    "UPDATE users SET name=$1, email=$2, password_hash=$3 WHERE id=$4 RETURNING *",
    [name, email, password_hash, id]
  );
  return result.rows[0];
};
