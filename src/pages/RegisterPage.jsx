import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import useAutoLogin from "../hooks/useAutoLogin";
import { toast } from "react-toastify";
import "../components/style/pages/registerPage.css";
import Forms from "components/main/Forms";

const RegisterPage = () => {
  const history = useHistory();
  const [registerInput, setRegisterInput] = useState({
    emailInput: "",
    passwordInput: "",
    nameInput: "",
    passwordInput2: "",
    bizInput: false,
  });
  const autoLoginFunction = useAutoLogin();
  const isPassMatch =
    registerInput.passwordInput === registerInput.passwordInput2;

  const handleUserInputChange = (ev) => {
    let newRegisterInput = JSON.parse(JSON.stringify(registerInput));
    if (newRegisterInput.hasOwnProperty(ev.target.id)) {
      newRegisterInput[ev.target.id] = ev.target.value;
      setRegisterInput(newRegisterInput);
    }
  };

  const handleCheckBoxInputChange = (ev) => {
    let newRegisterInput = JSON.parse(JSON.stringify(registerInput));
    if (newRegisterInput.hasOwnProperty(ev.target.id)) {
      newRegisterInput[ev.target.id] = ev.target.checked;
      setRegisterInput(newRegisterInput);
    }
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

  const handleSubmitRegister = (ev) => {
    ev.preventDefault();
    handleRegister();
  };

  const handleRegister = () => {
    registerInput && isPassMatch
      ? axios
          .post("/users/register", {
            name: registerInput.nameInput,
            email: registerInput.emailInput,
            password: registerInput.passwordInput,
            biz: registerInput.bizInput,
          })
          .then((res) => {
            history.push("/reg-succuss");
            setTimeout(() => {
              axios
                .post("/users/login", {
                  email: registerInput.emailInput,
                  password: registerInput.passwordInput,
                })
                .then((res) => {
                  localStorage.setItem("token", res.data.token);
                  autoLoginFunction(res.data.token);
                  setTimeout(() => {
                    let userInfo = jwt_decode(res.data.token);
                    userInfo && userInfo.biz
                      ? history.push("/createCard")
                      : history.push("/");
                  }, 100);
                });
            }, 1000);
          })
          .catch((err) => {
            console.error(err);
            toast(`🦄 ${err.response.data}!`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
      : WrongPass();
  };

  const mobileScreen = window.innerWidth >= 600;

  return (
    <div className="d-flex justify-content-center form-wrapper p-5 my-5">
      <div className="container">
        <div className="row w-100">
          {!mobileScreen || (
            <div className="col reg d-flex flex-column align-items-center justify-content-center">
              <h1 className="register">Register</h1>
              <h1 className="register">Register</h1>
              <h1 className="register">Register</h1>
            </div>
          )}
          <div className="col container-login d-flex justify-content-center ">
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

{
  /* <form
  className="login-form w-50 m-4 p-5 border bg-light"
  onSubmit={handleSubmitRegister}
>
  <div className="form-title d-flex justify-content-center">
    <h1 className="mb-5 fw-semibold">Sign Up</h1>
  </div>
  <div className="mb-3">
    <label
      htmlFor="nameInput"
      className="mb-3 form-label name-label"
    >
      Full Name
    </label>
    <input
      type="text"
      className="mb-5 form-control name-input"
      id="nameInput"
      aria-describedby="emailHelp"
      value={registerInput.nameInput}
      onChange={handleUserInputChange}
    />
  </div>
  <div className="mb-3">
    <label
      htmlFor="emailInput"
      className="mb-3 form-label email-label"
    >
      Email address
    </label>
    <input
      type="email"
      className="mb-5 form-control email-input"
      id="emailInput"
      aria-describedby="emailHelp"
      value={registerInput.emailInput}
      onChange={handleUserInputChange}
    />
  </div>
  <div className="mb-3">
    <label
      htmlFor="passwordInput"
      className="form-label pass-label"
    >
      Password
    </label>
    <input
      type="password"
      className="mt-2 mb-5 form-control pass-input"
      id="passwordInput"
      value={registerInput.passwordInput}
      onChange={handleUserInputChange}
    />
    <label
      htmlFor="passwordInput2"
      className="form-label pass-label"
    >
      Repeat Password
    </label>
    <input
      type="password"
      className="mt-2 mb-5 form-control pass-input"
      id="passwordInput2"
      value={registerInput.passwordInput2}
      onChange={handleUserInputChange}
    />
  </div>
  <div className="my-5 form-check d-flex justify-content-between">
    <div className="remember-me-check">
      <input
        type="checkbox"
        className=" form-check-input"
        id="bizInput"
        value=""
        checked={registerInput.bizInput}
        onChange={handleCheckBoxInputChange}
      />
      <label
        className=" form-check-label justify-self-start"
        htmlFor="bizInput"
      >
        Register as business account?
      </label>
    </div>
  </div>

  <div className="form-btns d-flex flex-column justify-content-between">
    <button type="submit" className="mt-5 mb-4 w-50 form-send-btn">
      Sign up
    </button>
  </div>
</form> */
}
