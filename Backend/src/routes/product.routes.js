const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth.middleware");

const {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController
} = require("../controllers/product.controller");

router.get("/", getProductsController);
router.get("/:id", getProductByIdController);
router.post("/", verifyToken, createProductController);
router.put("/:id", verifyToken, updateProductController);
router.delete("/:id", verifyToken, deleteProductController);

module.exports = router;