import express from "express";
import {
  login,
  register,
  deleteUserController,
  getUserStreamingServicesController,
  addStreamingServiceController,
  deleteStreamingServiceController,
  updateStreamingServiceController,
} from "../controllers/userController.js";
import { authenticationToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/delete", authenticationToken, deleteUserController);

router.get("/profile", authenticationToken, (req, res) => {
  res.json({ message: "Access allowed", user: req.user });
});

router.get(
  "/streaming-services",
  authenticationToken,
  getUserStreamingServicesController
);

router.post(
  "/streaming-services",
  authenticationToken,
  addStreamingServiceController
);

router.delete(
  "/streaming-services/:serviceId",
  authenticationToken,
  deleteStreamingServiceController
);

router.put(
  "/streaming-services/:serviceId",
  authenticationToken,
  updateStreamingServiceController
);

export default router;
