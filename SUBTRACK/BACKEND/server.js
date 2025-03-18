import express from "express";
import dotenv from "dotenv";
import authRouter from "./src/routes/authRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Working" });
});

app.use("/auth", authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
