import React from "react";
import { useState, useEffect } from "react";
import "../style/main/lengLogos.css"

const LengLogos = () => {
  const [logosData, setLogosData] = useState([]);

  const logosArr = [
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      altName: "JavaScript-logo",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
      altName: "html-logo",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
      altName: "css-logo",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919831.png",
      altName: "saas-logo",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3459/3459528.png",
      altName: "react-logo",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      altName: "bootstrap-logo",
    },
  ];

  useEffect(() => {
    setLogosData(logosArr);
  }, []);

  return (
    <>
      {logosData.map((item, idx) => {
        return (
          <div className={item.altName} key={`logo-key-${idx}`}>
            <img src={item.imgSrc} alt={item.altName} className="leng-logo" />
          </div>
        );
      })}
    </>
  );
};
export default LengLogos;
