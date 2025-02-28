import express, { Router } from "express";
import dotenv from "dotenv";
import router from "./src/routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Working" });
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
