import { Router } from "express";
import {
  insertProduct,
  showItems,
  deleteProduct,
  editProduct,
} from "./controller/products.js";

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

routes.get("/products", async (req, res) => {
  try {
    let products = await showItems();
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to show products!", error: error.message });
  }
});

routes.delete("/products/:id", async (req, res) => {
  const { id } = req.body;
  console.log("ID received: ", id);

  if (!id || isNaN(id)) {
    return res.status(400).json({ msg: "Invalid ID" });
  }

  try {
    const wasDeleted = await deleteProduct(id);
    if (wasDeleted) {
      res.status(200).json({ msg: "Product excluded succesfully" });
    } else {
      res.status(404).json({ msg: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error to delete data", error: error.message });
  }
});

routes.put("/products", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  if (!id) {
    return res.status(400).json({ msg: "You need an Id" });
  }

  try {
    const updatedProduct = req.body;
    await editProduct({ id, ...updatedProduct });
    res.status(200).json({ msg: "Product updated succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Error to updatte", error: error.message });
  }
});

export default routes;
