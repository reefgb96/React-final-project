import { useState, useEffect } from "react";
import "./App.scss";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
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
import MoreInfoPage from "pages/MoreInfoPage";
import EditCardPage from "pages/EditCardPage";
import CreateCardPage from "pages/CreateCardPage";
import updateUserInfo from "./services/updateUserInfo.js";
import useAutoLogin from "./hooks/useAutoLogin";
import AuthGuardRoute from "./components/main/AuthGuardRoute";
import AdminGuardRoute from "./components/main/AdminGuardRoute";

const App = () => {
  const autoLoginFunction = useAutoLogin();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [tryToLogin, setTryToLogin] = useState(true);

  useEffect(() => {
    (async () => {
      let status = await autoLoginFunction(localStorage.getItem("token"));
      if (status === false) {
        setTryToLogin(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (loggedIn === true && tryToLogin === true) {
      setTryToLogin(false);
    }
  }, [loggedIn]);

  return (
    <>
      <NavBar />
      <ToastContainer />
      {!tryToLogin && (
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <AuthGuardRoute
            path="/my-cards"
            component={MyCardsPage}
          ></AuthGuardRoute>
          <AuthGuardRoute
            path="/card/:id"
            component={MoreInfoPage}
          ></AuthGuardRoute>
          <AuthGuardRoute
            path="/edit/:id"
            component={EditCardPage}
          ></AuthGuardRoute>
          <AuthGuardRoute
            path="/createCard"
            component={CreateCardPage}
          ></AuthGuardRoute>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
        </Switch>
      )}
      <Footer />
    </>
  );
};

export default App;
