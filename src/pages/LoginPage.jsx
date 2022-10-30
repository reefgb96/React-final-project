import React from "react";
import "../components/style/pages/loginPage.css";

const LoginPage = () => {
  const mobileScreen = window.innerWidth >= 600;

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
            <form className="login-form w-75 m-4 p-5 border bg-light">
              <div className="form-title d-flex justify-content-center">
                <h1 className="mb-5 fw-semibold">Sign in</h1>
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="mb-3 form-label email-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="mb-5 form-control email-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputPassword1"
                  className="form-label pass-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="mt-2 form-control pass-input"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="my-5 form-check d-flex justify-content-between">
                <div className="remember-me-check">
                  <input
                    type="checkbox"
                    className=" form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className=" form-check-label justify-self-start"
                    for="exampleCheck1"
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
                <a className="form-links" href="#">
                  No account yet?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
