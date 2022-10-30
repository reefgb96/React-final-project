import React from "react";
import { Link } from "react-router-dom";
import "../style/footer/footer.css";

const Footer = () => {
  const logo = "<Reef Goldberg>";
  const mobileScreen = window.innerWidth >= 600;

  return (
    <div
      className={`footer-container h-25 container-fluid ${
        !mobileScreen || "py-5 mt-5"
      } `}
    >
      <div className="container text-center h-100">
        <div className={`row h-50 border-bottom ${mobileScreen || "py-2"}`}>
          <ul className="col d-flex flex-column align-items-center justify-content-around">
            <Link to="/" className="list-group-item">
              Home
            </Link>
            <Link to="/about" className="list-group-item">
              About
            </Link>
            <Link to="/my-cards" className="list-group-item">
              Cards
            </Link>
          </ul>
          <ul className="col d-flex flex-column align-items-center justify-content-center">
            <Link to="/contact" className="list-group-item">
              Contact
            </Link>
            <Link to="/Succuss-stories" className="list-group-item">
              Customer Stories
            </Link>
          </ul>
          <ul className="col d-flex flex-column align-items-center justify-content-center">
            <Link to="/login" className="list-group-item">
              Login
            </Link>
            <Link to="/register" className="list-group-item">
              Register
            </Link>
          </ul>
        </div>
        <div
          className={`row ${
            mobileScreen || "d-flex flex-column"
          } h-50 border-top py-5`}
        >
          <div className="col pb-3 d-flex flex-column justify-content-center align-items-center">
            <h5 className="address-footer"> Address: Hertzel 2 Jerusalem</h5>
            <div className="directions-logo d-flex">
              <a
                href="https://www.waze.com/live-map/directions/il/%D7%9E%D7%97%D7%95%D7%96-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/%D7%A9%D7%93%D7%A8%D7%95%D7%AA-%D7%94%D7%A8%D7%A6%D7%9C-2?to=place.ChIJRy3M5jDWAhURJrGvOj8yyck&from=ll.31.7734398%2C34.8078743&utm_medium=lm_share_directions&utm_campaign=default&utm_source=waze_website"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/720/720256.png"
                  alt="waze-logo"
                  className={`waze-logo ${mobileScreen && "w-50" && "w-25"}`}
                />
              </a>
              <a
                href="https://www.waze.com/live-map/directions/il/%D7%9E%D7%97%D7%95%D7%96-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/%D7%A9%D7%93%D7%A8%D7%95%D7%AA-%D7%94%D7%A8%D7%A6%D7%9C-2?to=place.ChIJRy3M5jDWAhURJrGvOj8yyck&from=ll.31.7734398%2C34.8078743&utm_medium=lm_share_directions&utm_campaign=default&utm_source=waze_website"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/355/355980.png"
                  alt="google-maps-logo"
                  className={`maps-logo ${mobileScreen && "w-50" && "w-25"}`}
                />
              </a>
            </div>
            {/* add external google maps/ waze link */}
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1 className="site-logo fs-3">{logo}™</h1>
            <p className="fs-6 opacity-50">All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
