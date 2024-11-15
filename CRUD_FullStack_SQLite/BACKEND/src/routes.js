import { Router } from "express";
import { deleteProduct, insertProduct } from "./Controler/product.js";
import { updateProduct } from "./Controler/product.js";
import { showProducts } from "./Controler/product.js";

const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is on!" });
});

routes.post("/products", async (req, res) => {
  try {
    await insertProduct(req.body);
    res.status(201).json({ message: "Product has been inserted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to insert data!", error: error.message });
  }
});

routes.put("/products", async (req, res) => {
  if (req.body && !req.body.id) {
    return res.status(400).json({
      msg: "You need an id!",
    });
  }

  try {
    await updateProduct(req.body);
    res.status(200).json({ message: "Product updated successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to update data!", error: error.message });
  }
});

routes.get("/products", async (req, res) => {
  try {
    let products = await showProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error to show products!",
      error: error.message,
    });
  }
});

routes.delete("/products/:id", async (req, res) => {
  const { id } = req.params; // O ID agora vem pela URL
  console.log("ID recebido:", id); // Verifique o valor do ID

  if (!id || isNaN(id)) {
    return res.status(400).json({ msg: "Invalid ID!" });
  }

  try {
    const wasDeleted = await deleteProduct(id); // Tenta excluir o produto
    if (wasDeleted) {
      res.status(200).json({ message: "Product excluded successfully!" });
    } else {
      res
        .status(404)
        .json({ message: "Product not found. No deletion occurred." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to delete data!", error: error.message });
  }
});

export default routes;
