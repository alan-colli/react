import { pool } from "../db/db.js";
import Router from "express";
import bcrypt from "bcrypt";
const router = Router();
import jwtGenerator from "../../utils/jwtGenerator.js";
import middlewareAuthorization from "../middleware/authorization.js";
import middlewareValidateInfo from "../middleware/validInfo.js";

router.post("/register", middlewareValidateInfo, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verify if the email is already in DB
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      // Return 401 if the user already exists
      return res.status(401).json({ message: "User already exists!" });
    }

    //Check if the password is a string
    if (!password || typeof password !== "string") {
      return res.status(400).json({ message: "Senha inválida!" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert new user in DB
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    // Creating Token
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });

    // Return success
    res.status(201).json({ message: "User has been registered!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
});

router.post("/login", middlewareValidateInfo, async (req, res) => {
  try {
    //destructure the req.body
    const { email, password } = req.body;

    //check if the user doesnt exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("User doesn't exists");
    }

    //check if the passwords matches
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json("Email or passowrd is incorrect!");
    }

    //send the jwt token
    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (error) {
    console.log(error);
  }
});

router.get("/isverify", middlewareAuthorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

export default router;
