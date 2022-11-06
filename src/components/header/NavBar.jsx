import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/navbar/navbar.css";

const NavBar = () => {
  const logo = "<Reef Goldberg>";
  const token = localStorage.getItem("token");

  const handleLogOut = (ev) => {
    const isStayLoggedIn = localStorage.getItem("stayLoggedin");
    {
      isStayLoggedIn ? ev.preventDefault() : localStorage.clear();
    }
    //fix log out, stay logged in, probably with Redux.
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top border-bottom main-nav">
      <div className="container-fluid container-wrapper">
        <NavLink to="/" className="navbar-brand">
          <h1 className="site-logo">{logo}</h1>
        </NavLink>
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
              <NavLink to="/" className="nav-link navbar-link">
                🏠Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link navbar-link">
                ❔About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" className="nav-link navbar-link">
                📑Contact
              </NavLink>
            </li>
            {token && (
              <li className="nav-item">
                <NavLink to="/my-cards" className="nav-link navbar-link">
                  📇My Cards
                </NavLink>
              </li>
            )}
          </ul>
          <div className="user-nav mx-5">
            <ul className="navbar-nav user-nav-list  me-auto mb-2 mb-lg-0">
              {!token && (
                <li className="nav-item">
                  <Link to="/login" className="mx-2">
                    <button className="nav-btns">Log in</button>
                  </Link>
                </li>
              )}
              {token && (
                <li className="nav-item">
                  <Link to="/login" className="mx-2">
                    <button onClick={handleLogOut} className="nav-btns">
                      Log out
                    </button>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/register" className="mx-2">
                  <button className="nav-btns">Register</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
