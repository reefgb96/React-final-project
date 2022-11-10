import React from "react";
import { useState } from "react";
import "../style/main/hero.css";
import LengLogos from "./LengLogos";

const HeroHomePage = () => {
  const mobileScreen = window.innerWidth >= 600;

  return (
    <div
      className={`container-fluid wrapper d-flex ${!mobileScreen || "px-5"}`}
    >
      <div className="hero-intro d-flex flex-column justify-content-evenly">
        <div
          className={`hero-title d-flex align-items-end h-50 ${
            mobileScreen || "justify-content-center"
          } `}
        >
          <h1
            className={`${mobileScreen || "fs-1 text-center my-5"}  text-wrap`}
          >
            Reef Goldberg's
            <br />
            React-Redux Project
          </h1>
        </div>
        <div
          className={`hero-desc d-flex align-items-start ${
            !mobileScreen || "h-25 "
          }`}
        >
          <p
            className={`${!mobileScreen || "w-75 "} ${
              mobileScreen || "text-center "
            }`}
          >
            Final project for React-Redux module implementing the knowledge
            gained along the course using JavaScript ES6, React Redux, CSS/SAAS,
            HTML5 and Bootstrap.
          </p>
        </div>
        <div
          className={` leng-logos d-flex ${mobileScreen || "text-center mt-5"}`}
        >
          <LengLogos />
        </div>
      </div>
      {mobileScreen && (
        <div className="main-container">
          <div className="portrait">
            <div className="card-back card-face">
              <img
                src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/312978275_10221945850496737_175420262710632824_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=h99xM3hZDQcAX--QhGM&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfCShVPXYGv7sQgcgPpQnAj-J7oRqM63YD3pVhOs8AcEag&oe=636D2EE0"
                alt="Reef Goldberg"
                className="img-fluid hero-img"
              />
            </div>
            <div className="card-front card-face">
              <img
                src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/311594293_10221872104893143_4290343528267491232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=roIsgDz87R4AX9h-H0h&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfDEbNGurXlg_evwRxzjfyxkfeUD27n-7_jUcChc7oKyIw&oe=63602F76"
                alt="Reef Goldberg"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroHomePage;
