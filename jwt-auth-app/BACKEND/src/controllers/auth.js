import db from "../db/index.js";
import bcrypt from "bcryptjs";
const { hash } = bcrypt;

const getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select * from users");
    console.log(rows);
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

export { getUsers, register };
