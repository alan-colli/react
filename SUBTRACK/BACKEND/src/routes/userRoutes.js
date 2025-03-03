import express from "express";
import { getUser, postUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/user/:email", getUser);
router.post("/post", postUser);

export default router;
