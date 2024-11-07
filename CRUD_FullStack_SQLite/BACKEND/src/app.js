import express from "express";
import routes from "./routes.js";
import { createTable } from "./Controler/product.js";

const app = express();

createTable();

app.use(express.json());
app.use(routes);

export default app;
