import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
