import Router from "express";
import {
  getUsers,
  register,
  login,
  isProtected,
  logout,
} from "../controllers/auth.js";
import { loginValidation, registerValidation } from "../validators/auth.js";
import {
  userAuth,
  validationMiddleware,
} from "../middlewares/auth-middleware.js";

const router = Router();

router.get("/", (req, res) => {
  return res.send("working!");
});

router.get("/get-users", getUsers);
router.post("/protected", userAuth, isProtected);
router.post("/register", registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.get("/logout", logout);
export default router;
