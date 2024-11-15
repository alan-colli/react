import express from "express";
import routes from "./routes.js";
import { createTable } from "./Controler/product.js";
import cors from "cors";

const app = express();

createTable();

app.use(
  cors({
    origgin: "http://localholst:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(routes);

export default app;
