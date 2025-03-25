import { pool } from "../db/db.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, hashedPassword]
  );
  res.json(result.rows[0]);
}
