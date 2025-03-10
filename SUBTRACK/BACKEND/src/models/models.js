import { pool } from "../database/db.js";
import bcrypt from "bcrypt";

export const getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

export async function createUser(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
    [name, email, hashedPassword]
  );
  return result.rows[0];
}

export const deleteUser = async (userId) => {
  const result = await pool.query("DELETE FROM users WHERE id = $1", [userId]);
};
