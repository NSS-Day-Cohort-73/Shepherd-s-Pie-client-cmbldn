export const getEmployeeByEmail = (email) => {
  return fetch(`http://localhost:8088/employees?email=${email}`).then((res) =>
    res.json()
  );
};

export const getOrders = () => {
  return fetch(`http://localhost:8088/orders`).then((res) => res.json());
};

export const deleteOrder = (orderId) => {
  return fetch(`http://localhost:8088/orders/${orderId}`, {
    method: "DELETE",
  });
};
