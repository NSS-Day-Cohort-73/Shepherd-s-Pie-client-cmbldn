export const getPizzaSizes = () => {
  return fetch("http://localhost:8088/size").then((res) => res.json());
};

export const getPizzaCheeses = () => {
  return fetch("http://localhost:8088/cheese").then((res) => res.json());
};

export const getPizzaSauce = () => {
  return fetch("http://localhost:8088/sauce").then((res) => res.json());
};

export const getPizzaToppings = () => {
  return fetch("http://localhost:8088/toppings").then((res) => res.json());
};

export const getPizzasByOrder = () => {
  return fetch("http://localhost:8088/orders?_embed=pizza").then((res) =>
    res.json()
  );
};

export const getPizzasByOrderandId = (orderId) => {
  return fetch(`http://localhost:8088/orders/${orderId}?_embed=pizza`);
};

export const postOrder = (newOrder) => {
  return fetch(`http://localhost:8088/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrder),
  }).then((res) => {
    return res.json();
  });
};