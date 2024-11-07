export const getEmployeeByEmail = (email) => {
  return fetch(`http://localhost8088/employees?email=${email}`).then((res) =>
    res.json()
  );
};
