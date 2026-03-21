import { useState, useEffect } from "react";

import {
  getOrders,
  getOrderDetails,
  updateOrder,
} from "@services/order.service";

import "bootstrap/dist/css/bootstrap.min.css";

function AdminView() {
  const [orders, setOrders] = useState([]);
  const [details, setDetails] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error cargando órdenes:", error);
      }
    };

    fetchOrders();
  }, []);

  const viewDetails = async (orderId) => {
    try {
      const data = await getOrderDetails(orderId);
      setDetails(data);
      setSelectedOrderId(orderId);
    } catch (error) {
      console.error("Error loading order details:", error);
    }
  };

  const changeStatus = async (order) => {
    try {
      const newStatus =
        order.status === "en pedido"
          ? "en preparacion"
          : order.status === "en preparacion"
          ? "listo"
          : "entregado";

      const updatedOrder = {
        ...order,
        status: newStatus,
      };

      await updateOrder(order.id, updatedOrder);

      const updatedOrders = orders.map((o) =>
        o.id === order.id ? { ...o, status: newStatus } : o
      );

      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Panel administrativo</h2>

      <table className="table table-striped shadow">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user_id ?? order.client ?? "Sin usuario"}</td>
              <td>${Number(order.total_price).toLocaleString("es-CL")}</td>
              <td>{order.status}</td>
              <td className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => viewDetails(order.id)}
                >
                  Ver detalle
                </button>

                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={() => changeStatus(order)}
                >
                  Cambiar estado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrderId && (
        <div className="mt-4">
          <h4>Detalle de la orden #{selectedOrderId}</h4>

          {details.length === 0 ? (
            <p>No hay detalles para esta orden.</p>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {details.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${Number(item.price).toLocaleString("es-CL")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminView;