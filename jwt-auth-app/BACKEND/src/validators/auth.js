import { check } from "express-validator";
import db from "../db/index.js";
import bcrypt from "bcryptjs";
const { compare } = bcrypt;

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

const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * FROM users WHERE email = $1", [value]);
  if (!user.rows.length) {
    throw new Error("Email does not exists");
  }

  const validPassword = await compare(req.body.password, user.rows[0].password);
  if (!validPassword) {
    throw new Error("Wrong password");
  }

  req.user = user.rows[0];
});

export const registerValidation = [email, password, emailExistes];
export const loginValidation = [loginFieldsCheck];
