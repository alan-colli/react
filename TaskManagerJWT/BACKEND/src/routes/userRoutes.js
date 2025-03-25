import express from "express";
import {
  register,
  login,
  controllerDelete,
} from "../controllers/userController.js";
import { authToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/delete", authToken, controllerDelete);

export default router;
