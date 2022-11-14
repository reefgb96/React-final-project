import "../components/style/pages/loginPage.css";
import Forms from "components/main/Forms";

const LoginPage2 = () => {
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
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage2;
