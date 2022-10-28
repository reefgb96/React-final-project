import React from "react";
import { Link } from "react-router-dom";
import "../style/footer/footer.css";

const Footer = () => {
  const logo = "<Reef Goldberg>";

  return (
    <div className="footer-container h-25 container-fluid py-5 mt-5">
      <div className="container text-center h-100">
        <div className="row h-50 border-bottom">
          <ul className="col d-flex flex-column align-items-center justify-content-around">
            <Link to="/" className="list-group-item">
              Home
            </Link>
            <Link to="/" className="list-group-item">
              About
            </Link>
            <Link to="/" className="list-group-item">
              Cards
            </Link>
          </ul>
          <ul className="col d-flex flex-column align-items-center justify-content-center">
            <Link to="/" className="list-group-item">
              Contact
            </Link>
            <Link to="/" className="list-group-item">
              Customer Stories
            </Link>
          </ul>
          <ul className="col d-flex flex-column align-items-center justify-content-center">
            <Link to="/" className="list-group-item">
              User profile
            </Link>
            <Link to="/" className="list-group-item">
              Cart
            </Link>
          </ul>
        </div>
        <div className="row h-50 border-top">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1 className="site-logo fs-3">{logo}™</h1>
            <p className="fs-6 opacity-50">All rights reserved.</p>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h5 className="address-footer"> Address: Hertzel 2 Jerusalem</h5>
            {/* add external google maps/ waze link */}
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <p className="text-footer">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              nam explicabo dolores vitae error ut, quaerat nobis, expedita
              dolor iure, ad esse similique aliquam laborum numquam doloribus?
              In, nisi illo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
