import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "store/auth";
import "../style/navbar/navbar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dataFromToken = useSelector((state) => state.auth.userData);
  const stayLoggedIn = useSelector((state) => state.auth.stay);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const mobileScreen = window.innerWidth >= 600;
  const logo = "<Reef Goldberg>";

  const handleLogOut = () => {
    {
      !stayLoggedIn && localStorage.clear();
    }
    dispatch(authActions.logout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top border-bottom main-nav">
      <div className="container-fluid container-wrapper">
        <NavLink to={loggedIn ? "/cards" : "/"} className="navbar-brand">
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
              <NavLink
                to={loggedIn ? "/cards" : "/"}
                className="nav-link navbar-link"
              >
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
            {dataFromToken && dataFromToken.biz && (
              <li className="nav-item">
                <NavLink to="/my-cards" className="nav-link navbar-link">
                  📇My Cards
                </NavLink>
              </li>
            )}
          </ul>
          <div className="user-nav mx-2">
            <ul className="navbar-nav user-nav-list  me-auto mb-2 mb-lg-0">
              {!loggedIn ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="mx-2">
                      <button className="nav-btns">Log in</button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="mx-2">
                      <button className="nav-btns">Register</button>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  {!mobileScreen || (
                    <span className="fw-semibold">
                      {"Welcome " + userInfo.name}
                    </span>
                  )}
                  <Link to="/login" className="mx-2">
                    <button onClick={handleLogOut} className="nav-btns">
                      Log out
                    </button>
                  </Link>
                </li>
              )}
              <a href="tel:+97238678345" className="tel-link nav-btns">
                Call us!📞
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
