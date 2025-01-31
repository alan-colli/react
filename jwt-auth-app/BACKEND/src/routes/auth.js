import Router from "express";
import { getUsers } from "../controllers/auth.js";
import { registerValidation } from "../validators/auth.js";
import { validationMiddleware } from "../middlewares/auth-middleware.js";
import { register } from "../controllers/auth.js";

const router = Router();

router.get("/", (req, res) => {
  return res.send("working!");
});

router.get("/get-users", getUsers);
router.post("/register", registerValidation, validationMiddleware, register);

export default router;
