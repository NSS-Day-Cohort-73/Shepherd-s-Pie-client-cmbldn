import { Link } from "react-router-dom";
import picture from "../../assets/picture.png";
import "./salesReport.css";

export const SalesReport = () => {
  return (
    <div className="whole-container-sales">
      <div className="error-image-container">
        <img src={picture} alt="alert-picture" id="error-img" />
      </div>
      <div className="report-container">
        <div>
          <Link to="/home-page">
            <button className="error-btn">
              Uh oh! This page is not ready yet. Click here to go back home.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
