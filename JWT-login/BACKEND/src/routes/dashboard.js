import Router from "express";
const router = Router();
import { pool } from "../db/db.js";
import middlewareAuthorization from "../middleware/authorization.js";

router.get("/", middlewareAuthorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT username FROM users WHERE user_id = $1",
      [req.user]
    );

    res.json(user.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
});

export default router;
