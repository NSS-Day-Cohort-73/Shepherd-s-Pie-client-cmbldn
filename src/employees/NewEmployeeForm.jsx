import { useState } from "react";
import { addNewEmployee } from "../services/employeeService";
import "./EmployeeForm.css";

export const NewEmployeeForm = ({ onNewEmployeeAdded }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      name,
      address,
      phone,
      email,
      admin,
    };

    addNewEmployee(newEmployee).then((createdEmployee) => {
      if (createdEmployee) {
        onNewEmployeeAdded(createdEmployee);
      }
      setName("");
      setAddress("");
      setPhone("");
      setEmail("");
      setAdmin(false);
    });
  };

  return (
    <div className="form">
      <div className="form-container">
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              className="form-details"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div>
            <label>Address: </label>
            <textarea
              className="form-details"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number: </label>
            <input
              className="form-details"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              className="form-details"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label>Admin: </label>
            <input
              className="form-details"
              type="checkbox"
              checked={admin}
              onChange={(event) => setAdmin(event.target.checked)}
            />
          </div>
          <button className="add-btn" type="submit">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};
