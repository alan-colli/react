import { createUser, getUser, deleteUser } from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await createUser(name, email, password);
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //get user
    const user = await getUser(email);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    //verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    //create token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.SECRET_KEY, // Changed from JWT_SECRET to SECRET_KEY
      { expiresIn: "1h" }
    );
    return res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error during login" });
  }
};

export const controllerDelete = async (req, res) => {
  const userId = req.user.userId; // Assuming you have user authentication middleware
  try {
    await deleteUser(userId);
    res.json({ message: "User deleted" });
  } catch (error) {
    console.error("Delete user error:", error);
    return res
      .status(500)
      .json({ message: "Server error during user deletion" });
  }
};
