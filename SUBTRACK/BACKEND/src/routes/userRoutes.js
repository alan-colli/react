import express from "express";
import { getUser, postUser, putUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/user/:email", getUser);
router.post("/post", postUser);
router.put("/put/:id", putUser);

export default router;
