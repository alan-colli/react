import { pool } from "../db/db.js";
import bcrypt from "bcrypt";

export async function createUser(name, email, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, hashedPassword]
  );
  return result.rows[0];
}

export async function getUser(email) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
}

export async function deleteUser(id) {
  const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  return result.rows[0];
}
