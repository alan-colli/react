import openDb from "../cfgDB.js";

export const insertProduct = async (product) => {
  try {
    const db = await openDb();
    await db.run(
      "INSERT INTO products (name, description, created_at) VALUES (?, ?, ?)",
      [product.name, product.decription, product.created_at]
    );
    console.log("Product inserted succesfully");
  } catch (error) {
    console.error("Error to insert", error.message);
  }
};
