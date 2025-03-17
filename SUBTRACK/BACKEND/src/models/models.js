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

export const getUserStreamingServices = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM user_streaming_services WHERE user_id = $1",
    [userId]
  );
  return result.rows;
};

export const addStreamingService = async (userId, service_name, plan_price) => {
  const result = await pool.query(
    "INSERT INTO user_streaming_services (user_id, service_name, plan_price) VALUES ($1, $2, $3) RETURNING *",
    [userId, service_name, plan_price]
  );
  return result.rows[0];
};

export const deleteStreamingService = async (userId, serviceId) => {
  const result = await pool.query(
    "DELETE FROM user_streaming_services WHERE user_id = $1 AND id = $2 RETURNING *",
    [userId, serviceId]
  );
  return result.rows[0];
};

export const updateStreamingService = async (
  userId,
  serviceId,
  service_name,
  plan_price
) => {
  const result = await pool.query(
    "UPDATE user_streaming_services SET service_name = $1, plan_price = $2 WHERE user_id = $3 AND id = $4 RETURNING *",
    [service_name, plan_price, userId, serviceId]
  );
  return result.rows[0];
};
