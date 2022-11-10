import React from "react";
import "../components/style/pages/regSuccuss.css";

const RegSuccussPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className=" d-flex justify-content-center div-wrapper p-5">
        <div className="container-fluid">
          <div className="row w-100 h-100">
            <div className="col h-100 w-100 d-flex flex-column align-items-center justify-content-center ">
              <h1 className="text-white px-5 py-4 text-center">
                Thanks for registering!
              </h1>
              <div class="spinner-border text-success mt-4 fs-4" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegSuccussPage;
