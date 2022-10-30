import React from "react";
import DemoCards from "./DemoCards";

const About = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <h1 className="text-dark">About</h1>
        <span className="fs-4 w-50 my-5 text-center">
          Reef Goldberg's website is a platform for individuals and businesses
          to create a unique personal or business cards for any purpose.
        </span>
      </div>

      <div className="demoCards container-fluid w-100">
        <h2 className="text-center">Demo Cards:</h2>
        <DemoCards />
      </div>
    </>
  );
};

export default About;
