import { useState, useEffect } from "react";
import "./App.scss";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "./store/auth";
import jwt_decode from "jwt-decode";
import { Route, Switch } from "react-router-dom";
import NavBar from "components/header/NavBar";
import "./components/style/Global/global.css";
import Footer from "components/footer/Footer";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";
import SuccussStoriesPage from "pages/SuccussStoriesPage";
import MyCardsPage from "pages/MyCardsPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import BizRegisterPage from "pages/BizRegisterPage";

const App = () => {
  // implement auto login.

  return (
    <>
      <NavBar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/Succuss-stories" component={SuccussStoriesPage} />
        <Route path="/my-cards" component={MyCardsPage}></Route>
        {/* "MyCardsPage" link visible **ONLY IF LOGGED IN** 👆 */}
        <Route path="/login" component={LoginPage}></Route>
        {/* "LoginPage" link visible **ONLY IF LOGGED OUT** 👆 */}
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/biz-register" component={BizRegisterPage}></Route>
        {/* always visible 👆 */}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
