import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import './src/db/db.js';  // Add this line to import database connection

configDotenv();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Working on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Working");
});
