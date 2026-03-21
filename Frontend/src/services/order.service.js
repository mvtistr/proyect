import api from "./api";

export const getOrders = async () => {
  try {
    const res = await api.get("/orders");
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }
    throw new Error("NETWORK_ERROR");
  }
};

export const getOrderById = async (id) => {
  try {
    const res = await api.get(`/orders/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }
    throw new Error("NETWORK_ERROR");
  }
};

export const createOrder = async (orderData) => {
  try {
    const res = await api.post("/orders", orderData);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }
    throw new Error("NETWORK_ERROR");
  }
};

export const updateOrder = async (id, orderData) => {
  try {
    const res = await api.put(`/orders/${id}`, orderData);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }
    throw new Error("NETWORK_ERROR");
  }
};

export const deleteOrder = async (id) => {
  try {
    const res = await api.delete(`/orders/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }
    throw new Error("NETWORK_ERROR");
  }
};

export const getOrderDetails = async (id) => {
  try {
    const res = await api.get(`/orders/${id}/details`);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API_ERROR");
    }
    throw new Error("NETWORK_ERROR");
  }
};

export const orderService = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderDetails,
};