import express from "express";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("user/:email", getUser);

export default router;
