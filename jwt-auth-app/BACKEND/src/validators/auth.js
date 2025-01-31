import { check } from "express-validator";
import db from "../db/index.js";

const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("The password must have between 6 and 15 chars");

const email = check("email").isEmail().withMessage("The email is not valid");

const emailExistes = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    value,
  ]);
  if (rows.length) {
    throw new Error("This email already exists");
  }
});

export const registerValidation = [email, password, emailExistes];
