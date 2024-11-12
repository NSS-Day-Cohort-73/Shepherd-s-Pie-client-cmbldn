import { useEffect, useState } from "react";
import {
  getPizzaCheeses,
  getPizzas,
  getPizzaSauce,
  getPizzasByOrder,
  getPizzaSizes,
  getPizzaToppings,
  postPizza,
  postUpdatedPizza,
} from "../services/pizzaService";
import "./PizzaCreation.css";
import { useLocation } from "react-router-dom";

export const PizzaCreation = () => {
  const location = useLocation();
  const newOrder = location.state?.currentOrder;

  const [sizeOptions, setSizeOptions] = useState([]);

  const [cheeseOptions, setCheeseOptions] = useState([]);

  const [sauceOptions, setSauceOptions] = useState([]);

  const [toppingOptions, setToppingOptions] = useState([]);

  const [allPizzas, setAllPizzas] = useState([]);

  const [assignedPizzas, setAssignedPizzas] = useState([]);

  const [currentOrder, setCurrentOrder] = useState({
    id: 0,
    orderDateTime: new Date(),
    orderCost: 0,
    tip: newOrder.tip,
    tableNumber: newOrder.tableNumber ? newOrder.tableNumber : null,
    employeeId: newOrder.employeeId,
    deliveryId: newOrder.deliveryId ? newOrder.deliveryId : null,
    deliveryFee: newOrder.deliveryFee,
  });

  const [currentPizza, setCurrentPizza] = useState({
    id: 0,
    orderId: newOrder.id,
    sauceId: 0,
    cheeseId: 0,
    sizeId: 0,
    individualPizzaCost: 0,
  });

  useEffect(() => {
    getPizzas().then(setAllPizzas);
  }, []);

  useEffect(() => {
    getPizzaSizes().then(setSizeOptions);
  }, []);

  useEffect(() => {
    getPizzasByOrder().then(setAssignedPizzas);
  }, []);

  useEffect(() => {
    getPizzaCheeses().then(setCheeseOptions);
  }, []);

  useEffect(() => {
    getPizzaSauce().then(setSauceOptions);
  }, []);

  useEffect(() => {
    getPizzaToppings().then(setToppingOptions);
  }, []);

  const setPizzaSize = (sizeId) => {
    setCurrentPizza((prevPizza) => ({
      ...prevPizza,
      sizeId: sizeId,
    }));
    const existingPizza = allPizzas.find(
      (pizza) => pizza.id === currentPizza.id
    );
    if (existingPizza) {
      postUpdatedPizza(currentPizza);
      getPizzas().then(setAllPizzas);
    } else {
      postPizza(currentPizza).then((newPizza) => {
        setCurrentPizza((prevPizza) => ({
          ...prevPizza,
          id: newPizza.id,
        }));
      });
    }
  };

  const setPizzaCheese = (cheeseId) => {
    setCurrentPizza((prevPizza) => ({
      ...prevPizza,
      cheeseId: cheeseId,
    }));
    const existingPizza = allPizzas.find(
      (pizza) => pizza.id === currentPizza.id
    );
    if (existingPizza) {
      postUpdatedPizza(currentPizza);
      getPizzas().then(setAllPizzas);
    } else {
      postPizza(currentPizza).then((newPizza) => {
        setCurrentPizza((prevPizza) => ({
          ...prevPizza,
          id: newPizza.id,
        }));
      });
    }
  };

  const setPizzaSauce = (sauceId) => {
    setCurrentPizza((prevPizza) => ({
      ...prevPizza,
      sauceId: sauceId,
    }));
    const existingPizza = allPizzas.find(
      (pizza) => pizza.id === currentPizza.id
    );
    if (existingPizza) {
      postUpdatedPizza(currentPizza);
      getPizzas().then(setAllPizzas);
    } else {
      postPizza(currentPizza).then((newPizza) => {
        setCurrentPizza((prevPizza) => ({
          ...prevPizza,
          id: newPizza.id,
        }));
      });
    }
  };

  return (
    <div className="outer-container">
      <div className="row">
        <div className="delivery-or-dinein-box">
          <h1>Order # {newOrder.id}</h1>
          {newOrder.tableNumber ? <h3>Dine-in</h3> : <h3>Delivery</h3>}
        </div>
        <div className="shown-pizza"></div>

        <div className="size-options">
          <h2> Sizes:</h2>
          {sizeOptions.map((sizeObj) => {
            return (
              <div key={sizeObj.id}>
                <input
                  type="radio"
                  name="sizes"
                  key={sizeObj.id}
                  value={sizeObj.id}
                  onChange={(event) => {
                    setPizzaSize(parseInt(event.target.value));
                  }}
                />
                <label htmlFor={`size-${sizeObj.id}`}>
                  {sizeObj.size}(${sizeObj.price})
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="cheese-options">
          <h2>Cheeses:</h2>
          <select
            name="cheeses"
            onChange={(event) => {
              setPizzaCheese(parseInt(event.target.value));
            }}
          >
            <option value="0">Choose a cheese</option>
            {cheeseOptions.map((cheese) => {
              return <option value={cheese.id}>{cheese.type}</option>;
            })}
          </select>
          <div className="cheese-choose-one"> CHOOSE ONE </div>
        </div>
        <div className="sauce-options">
          <h2>Sauces:</h2>
          <select
            className="sauce"
            onChange={(event) => {
              setPizzaSauce(parseInt(event.target.value));
            }}
          >
            <option value="0">Choose a sauce</option>
            {sauceOptions.map((sauce) => {
              return <option value={sauce.id}>{sauce.type}</option>;
            })}
          </select>
          <div className="sauce-choose-one"> CHOOSE ONE</div>
        </div>
        <div className="toppings-choices">
          <h2>Toppings:</h2>
          {toppingOptions.map((topping) => {
            return (
              <div key={topping.id}>
                <input
                  type="checkbox"
                  value={topping.id}
                  key={topping.id}
                  name="toppings"
                />
                <label htmlFor={`topping-${topping.id}`}>{topping.type}</label>;
              </div>
            );
          })}
          <div className="topping-choose"> CHOOSE ANY ($ .50 each) </div>
        </div>
      </div>
      <div className="buttons">
        <button className="add-pizza">Add Pizza to Order</button>
        <button className="submit-order">Submit Completed Order</button>
      </div>
    </div>
  );
};
