import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../../services/employeeService.jsx";
import "./OrderHistory.css";
import { getAllEmployees } from "../../services/employeeService.js";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const [orders, setOrders] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const getAndSetOrders = () => {
    getOrders().then((orderArray) => {
      setOrders(orderArray);
    });
  };

  useEffect(() => {
    getAndSetOrders();
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  const handleDelete = (orderId) => {
    deleteOrder(orderId).then(() => {
      getAndSetOrders();
    });
  };
  const handleCardClick = () => {
    navigate("/order-details");
  };
  // Format date/time for display
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  const getEmployeeName = (employeeId) => {
    const employee = employees.find((emp) => emp.id === employeeId);
    return employee ? employee.name : "Unknown Driver";
  };

  return (
    <div className="orders">
      {orders.map((orderObj) => {
        return (
          <div
            key={orderObj.id}
            className="order-card"
            onClick={handleCardClick}
          >
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
                {orderObj.deliveryFee ? (
                  <div className="delivery-driver">
                    <div>Delivery</div>
                    <div>Driver: {getEmployeeName(orderObj.employeeId)}</div>
                  </div>
                ) : (
                  "Dine-in"
                )}
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
