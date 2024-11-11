import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../../services/employeeService.jsx";
import "./OrderHistory.css";
import { getAllEmployees } from "../../services/employeeService.js";

export const Order = () => {
  const [orders, setOrders] = useState([]);

  const getAndSetOrders = () => {
    getOrders().then((orderArray) => {
      setOrders(orderArray);
    });
  };

  useEffect(() => {
    getAndSetOrders();
  }, []);

  const handleDelete = (orderId) => {
    deleteOrder(orderId).then(() => {
      getAndSetOrders();
    });
  };

  // Format date/time for display
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="orders">
      {orders.map((orderObj) => {
        return (
          <div key={orderObj.id} className="order-card">
            <h3>Order #{orderObj.id}</h3>
            <div className="datetime">
              {formatDateTime(orderObj.orderDateTime)}
            </div>
            <div className="order-details">
              <div>Cost: ${orderObj.orderCost}</div>
              <div>Tip: ${orderObj.tip}</div>

              {!orderObj.deliveryFee && orderObj.tableNumber && (
                <div className="table-number">
                  Table #{orderObj.tableNumber}
                </div>
              )}
              <div className="delivery-info">
                {orderObj.deliveryFee ? "Delivery" : "Dine-in"}
              </div>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(orderObj.id)}
            >
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
