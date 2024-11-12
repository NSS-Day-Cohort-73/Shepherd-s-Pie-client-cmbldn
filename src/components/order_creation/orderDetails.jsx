import { Link } from "react-router-dom";
import "./OrderDetails.css";

export const OrderDetails = () => {
  return (
    <>
      <div className="error-container">
        <h1 className="error-message">PAGE IN PROGRESS!</h1>
      </div>
      <div>
        <Link to="/order-history">
          <button className="details-btn">
            Click here to go back to Order History.
          </button>
        </Link>
      </div>
    </>
  );
};
