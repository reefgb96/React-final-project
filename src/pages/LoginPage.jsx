import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import Joi from "joi-browser";
import validate from "../validation/validation";
import loginSchema from "../validation/login.validation";
// import useAutoLogin from "../hooks/useAutoLogin";
import { Link, useHistory } from "react-router-dom";
import "../components/style/pages/loginPage.css";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    // stayLoggedIn: false,
  });
  const history = useHistory();

  const handleLoginInputChange = (ev) => {
    let newLoginInput = JSON.parse(JSON.stringify(loginInput));
    newLoginInput[ev.target.id] = ev.target.value;
    setLoginInput(newLoginInput);
  };

  const handleStayLoggedIn = (ev) => {
    let newLoginInput = JSON.parse(JSON.stringify(loginInput));
    newLoginInput[ev.target.id] = ev.target.checked;
    setLoginInput(newLoginInput);
  };

  const handleSubmitLogIn = (ev) => {
    ev.preventDefault();
    const { error } = validate(loginInput, loginSchema);
    if (error) {
      let errorMsgs = "";
      for (let errorItem of error.details) {
        switch (errorItem.type) {
          case "string.min":
            errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
            break;
          case "string.max":
            errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
            break;
          default:
            errorMsgs += "something went wrong,";
            break;
        }
      }
      toast.error(errorMsgs, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    axios
      .post("/users/login", loginInput)
      .then(async (res) => {
        localStorage.setItem("token", res.data.token);
        // autoLoginFunction(res.data.token);
        toast(`🦄 Logged in!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(`😭 Something went wrong ${err}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="d-flex justify-content-center form-wrapper p-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col welcome-wrapper">
            <div className="login-welcome  p-5">
              <h1 className="login-welcome-title">Welcome Back!</h1>
            </div>
          </div>
          <div className="col container-login d-flex justify-content-center ">
            <form
              className="login-form w-75 m-4 p-5 border bg-light"
              onSubmit={handleSubmitLogIn}
            >
              <div className="form-title d-flex justify-content-center">
                <h1 className="mb-5 fw-semibold">Sign in</h1>
              </div>
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
                  className="mt-2 form-control pass-input"
                  id="password"
                  value={loginInput.password}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="my-5 form-check d-flex justify-content-between">
                <div className="remember-me-check">
                  <input
                    type="checkbox"
                    className=" form-check-input"
                    id="stayLoggedIn"
                    value=""
                    checked={loginInput.stayLoggedIn}
                    onChange={handleStayLoggedIn}
                  />
                  <label
                    className=" form-check-label justify-self-start"
                    htmlFor="stayLoggedIn"
                  >
                    Stay logged in?
                  </label>
                </div>
                <a className="form-links" href="#">
                  forgot password?
                </a>
              </div>
              <div className="form-btns d-flex flex-column justify-content-between">
                <button type="submit" className="mt-5 mb-4 w-50 form-send-btn">
                  Sign in
                </button>
                <Link to={"/register"} className="form-links">
                  No account yet?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
