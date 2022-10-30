import React, { useState, useEffect, useRef } from "react";
import "../style/main/projects.css";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// // import "./styles.css";
// // import required modules
// import { FreeMode, Pagination } from "swiper";

const projectsArr = [
  {
    urlLink: "https://reefgb96.github.io/ReefFlix-React-MoveApp/",
    title: "ReefFlix - Movie App",
    id: "1",
  },
  {
    urlLink: "https://reefgb96.github.io/Course-CountDown/",
    title: "Course CountDown",
    id: "2",
  },
  {
    urlLink: "https://reefgb96.github.io/04.09.22-surfboard-volume-calculator/",
    title: "The Surfboard Volume Calculator",
    id: "3",
  },
  {
    urlLink: "https://reefgb96.github.io/weather-app/",
    title: "weather-app",
    id: "4",
  },
  {
    urlLink: "https://reefgb96.github.io/yugihoMemoryGame/",
    title: "Yu Gi Ho! Memory Card Game",
    id: "5",
  },
  {
    urlLink: "https://reefgb96.github.io/project-Surfdome-JS/",
    title: "Surfdome mimic",
    id: "6",
  },
  {
    urlLink: "https://reefgb96.github.io/magicHateBuzi/",
    title: "Magic Hate Buzi",
    id: "7",
  },
  {
    urlLink: "https://reefgb96.github.io/calculator/",
    title: "calculator",
    id: "8",
  },
];
const ExtProjects = () => {
  const [cardsInfo, setCardsInfo] = useState([]);
  const mobileScreen = window.innerWidth >= 600;

  useEffect(() => {
    setCardsInfo(projectsArr);
  }, []);

  return (
    <div className={`py-5 ${!mobileScreen || "my-5"}`}>
      <div className="external-links d-flex flex-column justify-content-center align-items-center my-5 p-5">
        <h3 className={`external-links-title fs-1  ${!mobileScreen || "my-5"}`}>
          Here are some smaller projects ive made over the time studying at
          HackerU:
        </h3>
        <div className="links-container container w-75 flex-wrap d-flex justify-content-center align-items-center">
          {cardsInfo &&
            cardsInfo.map((item, idx) => {
              return (
                <div
                  className="card my-4 mx-4 pb-2 project-cards "
                  key={`card-key-${idx}`}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3676/3676281.png"
                    className="card-img-top"
                    alt={item.title}
                  />
                  <span className="mb-3 text-wrap">{item.title}</span>
                  <a
                    className="btn btn-dark link-btn"
                    href={item.urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check me out
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ExtProjects;
