export const getAllEmployees = () => {
  return fetch("http://localhost:8088/employees").then((res) => res.json());
};

export const getEmployeeByEmail = (email) => {
  return fetch(`http://localhost:8088/employees?email=${email}`).then((res) =>
    res.json()
  );
};

export const addNewEmployee = (newEmployee) => {
  return fetch(`http://localhost:8088/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployee)
  }).then((res) => res.json())
}

export const deleteEmployee = (id) => {
  return fetch(`http://localhost:8088/employees/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
}