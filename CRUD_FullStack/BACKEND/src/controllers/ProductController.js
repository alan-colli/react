import ProductModel from "../models/ProductModel.js";

class ProductController {
  async store(req, res) {
    try {
      const { title, description, price } = req.body;

      const ProductAlreadyExists = await ProductModel.findOne({ title: title });

      if (ProductAlreadyExists) {
        return res.status(404).json({ message: "This name already exists!" });
      }
      if (!title || !description || !price) {
        return res
          .status(400)
          .json({ message: "Title, description and price are required!" });
      }
      const createdProduct = await ProductModel.create(req.body);

      return res.status(200).json(createdProduct);
    } catch (error) {
      return res.status(404).json({ message: "Couldn't create!" });
    }
  }

  async index(req, res) {
    try {
      const listProduct = await ProductModel.find();

      return res.status(200).json(listProduct);
    } catch (error) {
      return res.status(404).json({ messagge: "Couldn't list!" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const product = await ProductModel.findById(id);

      if (!product) {
        return res.status(404).json({ message: "Product does not exist!" });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(404).json({ message: "Verify the product ID" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await ProductModel.findByIdAndUpdate(id, req.body);

      return res.status(200).json({ message: "Product updated!" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to update!" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await ProductModel.findByIdAndDelete(id);

      return res.status(200).json({ message: "Deleted succesfully!" });
    } catch (error) {
      return res.status(404).json({ message: "Didn't delete" });
    }
  }
}

export default new ProductController();
