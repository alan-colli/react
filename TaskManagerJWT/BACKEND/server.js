import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import "./src/db/db.js"; // Add this line to import database connection
import userRoutes from "./src/routes/userRoutes.js";

configDotenv();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Working on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api", userRoutes);
