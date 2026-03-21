import api from "./api.js";

export const getProducts = async () => {
  try {
    const res = await api.get("/products");

    if (!res.data) {
      throw new Error("EMPTY_DATA");
    }

    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }

    throw new Error("NETWORK_ERROR");
  }
};

export const getProductById = async (id) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }

    throw new Error("NETWORK_ERROR");
  }
};

export const createProduct = async (productData) => {
  try {
    const res = await api.post("/products", productData);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }

    throw new Error("NETWORK_ERROR");
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const res = await api.put(`/products/${id}`, productData);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }

    throw new Error("NETWORK_ERROR");
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }

    throw new Error("NETWORK_ERROR");
  }
};

export const productService = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};