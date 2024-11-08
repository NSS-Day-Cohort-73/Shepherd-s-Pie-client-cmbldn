import { useEffect, useState } from "react";
import "./CreateOrder.css";
import { getAllEmployees } from "../services/employeeService";

export const CreateOrder = () => {
  //useStates
  const [allEmployees, setAllEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(0);

  useEffect(() => {
    getAllEmployees().then((res) => {
      setAllEmployees(res);
    });
  }, []);
  const AssignToNewOrder = () => {};

  return (
    <div className="outer-container">
      <div className="delivery-container">
        <div className="delivery-dropdown">
          <select
            id="employee-dropdown"
            onChange={(event) => {
              setSelectedEmployeeId(
                parseInt(event.target.value),
                AssignToNewOrder()
              );
            }}
          >
            <option value="0">Employee</option>
            {allEmployees.map((employee) => {
              return (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="adress-bar">
          <input type="text" placeholder="Address" className="address-bar" />{" "}
        </div>
        <div className="number-bar">
          <input
            type="tel"
            placeholder="Phone Number"
            className="number-bar"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
        <button className="delivery-submit-button">Start Delivery Order</button>
      </div>
    </div>
  );
};
