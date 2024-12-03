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
  console.log("Received body:", req.body); // Verifique o que está chegando
  const { name, description, created_at } = req.body;

  // Validação dos campos obrigatórios
  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Name and description are required!" });
  }

  try {
    const product = {
      name,
      description,
      created_at: created_at || new Date().toISOString(),
    };
    await insertProduct(product);
    res.status(201).json({ message: "Product has been inserted!", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to insert product!", error: error.message });
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
  const { id } = req.params;
  const idAsNumber = parseInt(id, 10);
  console.log("ID received: ", idAsNumber); // Mostra o id como número

  if (!id || isNaN(idAsNumber)) {
    return res.status(400).json({ msg: "Invalid ID" });
  }

  try {
    const wasDeleted = await deleteProduct(idAsNumber); // Usando idAsNumber aqui
    if (wasDeleted) {
      res.status(200).json({ msg: "Product excluded successfully" });
    } else {
      res.status(404).json({ msg: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error deleting data", error: error.message });
  }
});

routes.put("/products/:id", async (req, res) => {
  const { id } = req.params; // id vindo da URL
  const idAsNumber = parseInt(id, 10); // Convertendo para número

  console.log("ID received: ", idAsNumber);

  if (!idAsNumber) {
    return res.status(400).json({ msg: "You need an Id" });
  }

  const updatedProduct = req.body;

  try {
    await editProduct({ id: idAsNumber, ...updatedProduct });

    res.status(200).json({ msg: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error to update", error: error.message });
  }
});

export default routes;

