import openDb from "../cfgDB.js";

export const insertProduct = async (product) => {
  try {
    const db = await openDb();
    await db.run(
      "INSERT INTO products (name, description, created_at) VALUES (?, ?, ?)",
      [product.name, product.description, product.created_at]
    );
    console.log("Product inserted succesfully");
  } catch (error) {
    console.error("Error to insert", error.message);
  }
};

export const showItems = async () => {
  try {
    const db = await openDb();
    const products = await db.all("SELECT * FROM products");
    return products;
  } catch (error) {
    console.error("Error to show products!", error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const db = await openDb();
    //Verify if the product exist
    const product = await db.get("SELECT * FROM products WHERE id=?", [id]);
    if (!product) {
      console.log("Product hasnt been found!", id);
      return false;
    }

    //Deletin product
    const productToDelete = await db.run("DELETE FROM products WHERE id=?", [
      id,
    ]);
    console.log(`Number of products deleted: ${productToDelete.changes}`);

    return productToDelete.changes > 0;
  } catch (error) {
    console.error("Error to delete product", error.message);
    throw error;
  }
};

export const editProduct = async (product) => {
  try {
    const db = await openDb();
    await db.run(
      "UPDATE products SET name=?, description=?, created_at=? WHERE id=?",
      [product.name, product.description, product.created_at, product.id]
    );
    console.log("product updated succesfully");
  } catch (error) {
    console.error("Error to update", error.message);
  }
};
