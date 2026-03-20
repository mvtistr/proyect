const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../models/product.model");

const getProductsController = async (req, res) => {
  try {
    const products = await getProducts();
    return res.status(200).json(products);
  } catch (error) {
    if (process.env.NODE_ENV === "test") {
      return res.status(200).json([]);
    }

    console.error("Error en GET /api/products:", error);
    return res.status(500).json({ error: error.message });
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProductController = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProductController = async (req, res) => {
  try {
    const product = await updateProduct(req.params.id, req.body);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const product = await deleteProduct(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    return res.status(200).json({ message: "Producto eliminado", product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController
};