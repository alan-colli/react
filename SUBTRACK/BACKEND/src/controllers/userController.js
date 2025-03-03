import { getUserByEmail, createUser } from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET_KEY = process.env.SECRET_KEY;

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const validPassword = await bcrypt.compare(password, user.password_hash);
  if (!validPassword) {
    return res.status(404).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token });
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
