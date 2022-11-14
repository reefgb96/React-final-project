import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ValidateErr from "components/main/ValidateErr";
import { toast } from "react-toastify";
import useAutoLogin from "../../hooks/useAutoLogin";
import { authActions } from "store/auth";
import loginSchema from "../../validation/login.validation";
import jwt_decode from "jwt-decode";

const Forms = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    bizInput: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const autoLoginFunction = useAutoLogin();
  let currLocation = history.location.pathname === "/register";

  const handleLoginInputChange = (ev) => {
    let newLoginInput = JSON.parse(JSON.stringify(loginInput));
    newLoginInput[ev.target.id] = ev.target.value;
    setLoginInput(newLoginInput);
  };

  const handleStayLoggedIn = (ev) => {
    ev.target.checked
      ? dispatch(authActions.stayLoggedIn(true))
      : dispatch(authActions.stayLoggedIn(false));
  };

  const WrongPass = () => {
    toast("🦄 Passwords dont match!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmitLogIn = (ev) => {
    ev.preventDefault();
    ValidateErr(
      {
        email: loginInput.email,
        password: loginInput.password,
      },
      loginSchema
    );
    axios
      .post("/users/login", {
        email: loginInput.email,
        password: loginInput.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        autoLoginFunction(res.data.token);
        setTimeout(() => {
          let userInfo = jwt_decode(res.data.token);
          userInfo && userInfo.biz
            ? history.push("/my-cards")
            : history.push("/");
        }, 100);
        toast(`🦄 Logged in!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.error("error", err.response.data);
        toast.error(`😭 Email or password are invalid.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          progress: undefined,
        });
        WrongPass();
      });
  };

  return (
    <form
      className={`login-form m-4 p-5 border bg-light ${
        currLocation ? "w-50" : "w-75"
      } `}
      onSubmit={handleSubmitLogIn}
    >
      <div className="form-title d-flex justify-content-center">
        <h1 className="mb-5 fw-semibold">
          {currLocation ? "Register" : "Sign in"}
        </h1>
      </div>
      {currLocation ? (
        <div className="mb-3">
          <label htmlFor="nameInput" className="mb-3 form-label name-label">
            Full Name
          </label>
          <input
            type="text"
            className="mb-5 form-control name-input"
            id="nameInput"
            aria-describedby="emailHelp"
            value={loginInput.name}
            onChange={handleLoginInputChange}
          />
        </div>
      ) : null}
      <div className="mb-3">
        <label htmlFor="email" className="mb-3 form-label email-label">
          Email address
        </label>
        <input
          type="email"
          className="mb-5 form-control email-input"
          id="email"
          aria-describedby="emailHelp"
          value={loginInput.email}
          onChange={handleLoginInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label pass-label">
          Password
        </label>
        <input
          type="password"
          className="mt-2 mb-5 form-control pass-input"
          id="password"
          value={loginInput.password}
          onChange={handleLoginInputChange}
        />
        {currLocation ? (
          <>
            <label htmlFor="passwordInput2" className="form-label pass-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="mt-2 mb-5 form-control pass-input"
              id="passwordInput2"
              value={loginInput.password2}
              onChange={handleLoginInputChange}
            />
          </>
        ) : null}
      </div>
      <div className="my-5 form-check d-flex justify-content-between">
        <div className="remember-me-check">
          <input
            type="checkbox"
            className=" form-check-input"
            id="stayLoggedIn"
            value=""
            onChange={handleStayLoggedIn}
          />
          <label
            className=" form-check-label justify-self-start"
            htmlFor="stayLoggedIn"
          >
            {currLocation ? "Register as business?" : "Stay logged in?"}
          </label>
        </div>
        {currLocation === "/login" ? (
          <a className="form-links" href="#">
            forgot password?
          </a>
        ) : null}
      </div>
      <div className="form-btns d-flex flex-column justify-content-between">
        <button type="submit" className="mt-5 mb-4 w-50 form-send-btn">
          Sign in
        </button>
        {currLocation === "/login" ? (
          <Link to={"/register"} className="form-links">
            No account yet?
          </Link>
        ) : null}
      </div>
    </form>
  );
};

export default Forms;
