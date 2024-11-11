import { useState } from "react";
import "./EditEmployeeForm.css";

export const EditEmployeeForm = ({ employee, onSave, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);
  const [email, setEmail] = useState(employee.email);
  const [admin, setAdmin] = useState(employee.admin);

  const handleSave = () => {
    const updateEmployee = { ...employee, name, address, phone, email, admin };
    onSave(updateEmployee);
  };

  return (
    <form className="edit-employees">
      <h2>Edit Employee</h2>
      <div>
        <label>Name: </label>
        <input
          className="edit-employee"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Address: </label>
        <textarea
          className="edit-employee"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div>
        <label>Phone Number: </label>
        <input
          className="edit-employee"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          className="edit-employee"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.email)}
        />
      </div>
      <label>
        Admin:
        <input
          className="edit-employee"
          type="checkbox"
          checked={admin}
          onChange={(event) => setAdmin(event.target.checked)}
        />
      </label>
      <div className="edit-employee-btns">
        <button className="save-btn" type="button" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
