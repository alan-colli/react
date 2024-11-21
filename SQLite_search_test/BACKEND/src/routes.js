import { Router } from "express";
import { insertProduct } from "./controller/products.js";

const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Health" });
});

routes.post("/products", async (req, res) => {
  console.log(req.body);
  try {
    await insertProduct(req.body);
    res.status(201).json({ message: "Product has been inserted!" });
  } catch (error) {
    res.status(500).json({ message: "Error to insert!", error: error.message });
  }
});

export default routes;
