import express from "express";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("user/:email", getUser);

router.get("/", (req, res) => {
  res.send("Route ok");
});

export default router;
