import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/jwtAuth.js";
import dashboard from "./src/routes/dashboard.js";

import cors from "cors";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/auth", routes);
app.use("/dashboard", dashboard);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Back running on ${PORT}!`);
});
