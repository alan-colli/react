import { openDb } from "../cfgDB.js";

// Criação da Tabela
export const createTable = async () => {
  try {
    const db = await openDb();
    await db.exec(
      "CREATE TABLE IF NOT EXISTS Product (id INTEGER PRIMARY KEY, name TEXT, description TEXT, price INTEGER);"
    );
    console.log("Table Product has been created or already exists!");
  } catch (err) {
    console.error("Error:", err.message);
  }
};

// Inserção de um Produto
export const insertProduct = async (product) => {
  try {
    const db = await openDb();
    console.log("DB is running!", db);
    await db.run(
      "INSERT INTO Product (name, description, price) VALUES (?, ?, ?)",
      [product.name, product.description, product.price]
    );
    console.log("Product inserted successfully!");
  } catch (err) {
    console.error("Error to create:", err.message);
  }
};

// Update de um produto
export const updateProduct = async (product) => {
  try {
    const db = await openDb();
    await db.run(
      "UPDATE Product SET name=?, description=?, price=? WHERE id=?",
      [product.name, product.description, product.price, product.id]
    );
    console.log("Product updated succesfully!");
  } catch (error) {
    console.error("Error to update!", error.message);
  }
};

// Vizualizar tabela Products
export const showProducts = async () => {
  try {
    const db = await openDb();
    const products = await db.all("SELECT * FROM Product");
    return products;
  } catch (error) {
    console.error("Error to show products!", error.message);
  }
};

// Excluir dados da tabela
// product.js
export const deleteProduct = async (id) => {
  try {
    const db = await openDb();
    console.log("Tentando excluir o produto com id:", id);

    // Verifica se o produto existe antes de tentar excluir
    const product = await db.get("SELECT * FROM Product WHERE id = ?", [id]);
    if (!product) {
      console.log("Produto não encontrado com o id:", id);
      return false;
    }

    // Tenta deletar o produto
    const result = await db.run("DELETE FROM Product WHERE id = ?", [id]);
    console.log(`Número de registros deletados: ${result.changes}`);

    return result.changes > 0;
  } catch (error) {
    console.error("Error ao excluir produto!", error.message);
    throw error;
  }
};
