import express from "express";
import {
  login,
  register,
  deleteUserController,
} from "../controllers/userController.js";
import { authenticationToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/delete", authenticationToken, deleteUserController);

router.get("/profile", authenticationToken, (req, res) => {
  res.json({ message: "Access allowed", user: req.user });
});

export default router;
