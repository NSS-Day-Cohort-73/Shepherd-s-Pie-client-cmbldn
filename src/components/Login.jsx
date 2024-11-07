import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployeeByEmail } from "../services/employeeService.jsx";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    return getEmployeeByEmail(email).then((foundEmployees) => {
      if (foundEmployees.length === 1) {
        const employee = foundEmployees[0];
        localStorage.setItem(
          "shepards_employee",
          JSON.stringify({
            id: employee.id,
            admin: employee.admin,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid Email");
      }
    });
  };

  return (
    <main className="container-login">
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1>Shepard's Pie</h1>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                placeholder="email address"
                required
                autoFocus
              />
              <div className="form-group">
                <button className="login-btn btn-info" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
};
