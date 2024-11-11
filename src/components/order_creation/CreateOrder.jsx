import { useEffect, useState } from "react";
import "./CreateOrder.css";
import { getAllEmployees } from "../../services/employeeService";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { postOrder } from "../../services/pizzaService";

export const CreateOrder = () => {
  //useStates
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState("");
  const [allEmployees, setAllEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(0);
  const [newOrder, setNewOrder] = useState({
    id: 0,
    orderDateTime: new Date(),
    orderCost: 0,
    tip: 0,
    tableNumber: null,
    employeeId: 0,
    deliveryId: null,
    deliveryFee: false,
  });

  useEffect(() => {
    getAllEmployees().then((res) => {
      setAllEmployees(res);
    });
  }, []);
  const AssignToNewDeliveryOrder = (employeeId) => {
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      employeeId: employeeId,
      deliveryFee: true,
      deliveryId: 0,
      tableNumber: null,
    }));
  };

  const AssignToNewDineinOrder = (employeeId) => {
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      employeeId: employeeId,
    }));
  };

  const AssignTableNumber = (tableNumber) => {
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      tableNumber: tableNumber,
      deliveryId: null,
      deliveryFee: false,
    }));
  };

  const setTheTip = (tip) => {
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      tip: tip,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !selectedEmployeeId ||
      (orderType === "dine-in" && !newOrder.tableNumber)
    ) {
      alert("Please fill in all fields.");
      return;
    } else {
      postOrder(newOrder).then((createdOrder) => {
        navigate("/pizza", {
          state: { currentOrder: createdOrder },
        });
      });
    }
  };

  return (
    <div className="outer-container">
      <form>
        <fieldset>
          <div className="delivery-container">
            <div className="delivery-dropdown">
              <select
                id="employee-dropdown"
                onChange={(event) => {
                  setSelectedEmployeeId(parseInt(event.target.value));
                  AssignToNewDeliveryOrder(parseInt(event.target.value));
                  setOrderType("delivery");
                }}
              >
                <option value="" required>
                  Employee
                </option>
                {allEmployees.map((employee) => {
                  return (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="address-bar-container">
              <input
                type="text"
                placeholder="Address"
                className="address-bar"
              />{" "}
            </div>
            <div className="number-bar-container">
              <input
                type="tel"
                placeholder="Phone Number"
                className="number-bar"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div className="tip-bar-container">
              <input
                type="text"
                className="tip-box"
                placeholder="Tip"
                onChange={(event) => {
                  setTheTip(parseInt(event.target.value));
                }}
              />
            </div>

            <button className="delivery-submit-button" onClick={handleSubmit}>
              Start Delivery Order
            </button>
          </div>
        </fieldset>
        <fieldset>
          <div className="dinein-container">
            <select
              id="employee-dropdown"
              onChange={(event) => {
                setSelectedEmployeeId(parseInt(event.target.value));
                AssignToNewDineinOrder(parseInt(event.target.value));
                setOrderType("dine-in");
              }}
            >
              <option value="">Employee</option>
              {allEmployees.map((employee) => {
                return (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                );
              })}
            </select>
            <select
              id="table-dropdown"
              onChange={(event) => {
                AssignTableNumber(parseInt(event.target.value));
              }}
            >
              <option key="0" value="0">
                Select a table Number
              </option>
              <option key="1" value="1">
                Table 1
              </option>
              <option key="3" value="3">
                Table 3
              </option>
              <option key="4" value="4">
                Table 4
              </option>
              <option key="5" value="5">
                Table 5
              </option>
              <option key="6" value="6">
                Table 6
              </option>
              <option key="7" value="7">
                Table 7
              </option>
              <option key="8" value="8">
                Table 8
              </option>
              <option key="9" value="9">
                Table 9
              </option>
            </select>
            <input
              type="text"
              className="tip-box"
              placeholder="Tip"
              onChange={(event) => {
                setTheTip(parseInt(event.target.value));
              }}
            />

            <button className="dine-in-btn" onClick={handleSubmit}>
              Start Dine in Order
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
