import { getUserByEmail, createUser, deleteUser } from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    throw error;
  }
};

export const register = async (req, res) => {
  const { name, email, password_hash } = req.body;
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return res.status(404).json({ error: "Email already exists" });
  }

  const user = await createUser(name, email, password_hash);
  res.json(user);
};

export const deleteUserController = async (req, res) => {
  try {
    const userId = req.user.id;

    await deleteUser(userId);

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    throw error;
  }
};
