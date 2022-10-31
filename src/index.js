import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* axios */
import axios from "axios";
/* import bootstrap to react*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
/* import Toastify to react */
import "react-toastify/dist/ReactToastify.css";
/* import redux */
import { Provider } from "react-redux";
// import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
/* config axios */
axios.defaults.baseURL = `${process.env.REACT_APP_DOMAIN}/api`;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    /*
        the token exists in local storage,
        the user logged in.
        if the token exists then we will add it to header of the request
    */
    config.headers["x-auth-token"] = token;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
