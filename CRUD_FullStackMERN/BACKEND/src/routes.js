import { Router } from "express";
import ProductController from "./controllers/ProductController.js";
import ProductModel from "./models/ProductModel.js";

const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is on..." });
});

routes.post("/products", ProductController.store);

routes.get("/products", ProductController.index);

routes.get("/products/:id", ProductController.show);

routes.put("/products/:id", ProductController.update);

routes.delete("/products/:id", ProductController.destroy);

export default routes;
