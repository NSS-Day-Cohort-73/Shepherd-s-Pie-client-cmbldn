import { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../services/employeeService";
import "./Employee.css";
import { NewEmployeeForm } from "./NewEmployeeForm";
import { EditEmployeeForm } from "./EditEmployeeForm";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  const handleNewEmployeeAdded = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
  };

  const handleSaveEdit = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const handleDelete = (id) => {
    deleteEmployee(id).then(() => {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    });
  };

  return (
    <div className="employee-management">
      <div className="employees">
        {employees.map((employeeObj) => {
          return (
            <div className="employee-info" key={employeeObj.id}>
              <div>
                <div className="employee-details">{employeeObj.name}</div>
              </div>
              <div>
                <div className="employee-details">{employeeObj.phone}</div>
              </div>
              <div>
                <div className="employee-details">{employeeObj.address}</div>
              </div>
              <div>
                <div className="employee-details">{employeeObj.email}</div>
              </div>
              <div className="buttons">
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(employeeObj)}
                >
                  Edit Employee
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(employeeObj.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {editingEmployee ? (
        <EditEmployeeForm
          employee={editingEmployee}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <NewEmployeeForm
          className="employee-form"
          onNewEmployeeAdded={handleNewEmployeeAdded}
        />
      )}
    </div>
  );
};
