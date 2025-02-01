import db from "../db/index.js";
import bcrypt from "bcryptjs";
const { hash } = bcrypt;
import jsonwebtokern from "jsonwebtoken";
const { sign } = jsonwebtokern;
import constants from "../constants/index.js";

const getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, email from users");
    return res.status(200).json({ succes: true, users: rows });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await db.query("INSERT INTO users(email,password) VALUES ($1 , $2)", [
      email,
      hashedPassword,
    ]);

    return res
      .status(201)
      .json({ succes: true, message: "The registration was succesfull" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  const user = req.user;
  const payload = {
    id: user.user_id,
    email: user.email,
  };
  try {
    const token = await sign(payload, constants.SECRET);

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ succes: true, message: "Logged Succesfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const isProtected = async (req, res) => {
  try {
    return res.status(200).json({ info: "protected info" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("token", { httpOnly: true })
      .json({ succes: true, message: "Logged Out Succesfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export { getUsers, register, login, isProtected, logout };
