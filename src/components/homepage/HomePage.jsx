import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="whole-container">
      <div className="image-container">
        <img src={logo} alt="Sheperds-pie-logo" />
      </div>
      <div className="button-container">
        <Link to="/create-order">
          <button className="btn-primary">Start Order</button>
        </Link>
        <Link to="/order-history">
          <button className="btn-secondary">Order History</button>
        </Link>
      </div>
    </div>
  );
};
