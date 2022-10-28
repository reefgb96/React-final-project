import React from "react";
import "../style/main/hero.css";
import LengLogos from "./LengLogos";

const HeroHomePage = () => {
  return (
    <div className="container-fluid d-flex px-5 ">
      <div className="hero-intro d-flex flex-column justify-content-evenly">
        <div className="hero-title d-flex align-items-end h-50">
          <h1 className="text-wrap ">
            Reef Goldberg's
            <br />
            React-Redux Project
          </h1>
        </div>
        <div className="hero-desc d-flex align-items-start h-25">
          <p className="fs-5 w-75">
            Final project for React-Redux module implementing the knowledge gained
            along the course using JavaScript ES6, React Redux, CSS/SAAS, HTML5
            and Bootstrap.
          </p>
        </div>
        <div className="leng-logos d-flex">
          <LengLogos />

        </div>
      </div>
      <div className="portrait">
        <img
          src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/311594293_10221872104893143_4290343528267491232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=roIsgDz87R4AX9h-H0h&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfDEbNGurXlg_evwRxzjfyxkfeUD27n-7_jUcChc7oKyIw&oe=63602F76"
          alt="Reef Goldberg"
          className="img-fluid float-end hero-img flip-card-front"
        />
      </div>


      {/* <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/311594293_10221872104893143_4290343528267491232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=roIsgDz87R4AX9h-H0h&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfDEbNGurXlg_evwRxzjfyxkfeUD27n-7_jUcChc7oKyIw&oe=63602F76" alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div> */}


      {/* <img
        src="https://www.bleepstatic.com/content/hl-images/2022/07/07/man-in-hood-typing.jpg"
        alt="Reef Goldberg programmer version"
        className="img-fluid float-end hero-img"
      /> */}

    </div>

  );
};

export default HeroHomePage;
