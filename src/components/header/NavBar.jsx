import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import "../style/navbar/navbar.css";

const NavBar = () => {
  const logo = "<Reef Goldberg>";
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top border-bottom main-nav">
        <div className="container-fluid container-wrapper">
          <Link to="/" className="navbar-brand logo-container">
            <h1 className="site-logo">{logo}</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Succuss-stories" className="nav-link">
                  Succuss stories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/my-cards" className="nav-link">
                  My Cards
                </Link>
              </li>
            </ul>
            <div className="user-nav mx-5">
              <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    {/* <FontAwesomeIcon icon="fa-regular fa-user" />  */}
                    <button className="nav-btns">Log in</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    {/* <FontAwesomeIcon icon="fa-regular fa-cart" />  */}
                    <button className="nav-btns">Register</button>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/biz-register" className="nav-link">
                    <button className="nav-btns">Business Register</button>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
