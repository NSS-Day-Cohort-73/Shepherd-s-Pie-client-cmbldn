import { Link } from "react-router-dom";
import image from "../assets/image.png"; // Make sure path is correct
import "./navbar.css";

export const NavBar = () => {
  const admin = true;
  return (
    <ul className="navbar">
      <div className="navbar-left">
        {admin && (
          <li className="navbar-item">
            <Link to="/employees" className="navbar-link">
              Employees
            </Link>
          </li>
        )}
        {admin && (
          <li className="navbar-item">
            <Link to="/sales" className="navbar-link">
              Sales Report
            </Link>
          </li>
        )}
      </div>

      <div className="navbar-right">
        <li className="navbar-item">
          <Link to="/orderHistory" className="navbar-link">
            Order History
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/homepage" className="navbar-link logo">
            <img src={image} alt="Shepard's Pie Logo" className="logo-image" />
            <span>Shepard's Pie</span>
          </Link>
        </li>
      </div>
    </ul>
  );
};
