import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import image from "/src/assets/image.png";
import "./navbar.css";

export const NavBar = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const employeeData = JSON.parse(localStorage.getItem("shepards_employee"));
    setIsAdmin(employeeData?.admin || false);
  }, []);

  return (
    <ul className="navbar">
      <div className="navbar-left">
        {isAdmin && (
          <>
            <li className="navbar-item">
              <Link to="/employees" className="navbar-link">
                Employees
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/sales" className="navbar-link">
                Sales Report
              </Link>
            </li>
          </>
        )}
      </div>

      <div className="navbar-right">
        <li className="navbar-item">
          <Link to="/order-history" className="navbar-link">
            Order History
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/home-page" className="navbar-link logo">
            <img src={image} alt="Shepard's Pie Logo" className="logo-image" />
            <span>Shepard's Pie</span>
          </Link>
        </li>
      </div>
    </ul>
  );
};
