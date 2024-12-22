import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(routes);

export default app;
