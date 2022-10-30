import React, { useState, useEffect, useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import "../style/main/demoCard.css";

const DemoCards = () => {
  const [demoCards, setDemoCards] = useState([]);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "no-data",
    // onAfterPrint: () => alert("Printed"),
    onAfterPrint: () => console.log(componentRef.current),
  });

  const demoCardsArr = [
    {
      imgSrc: "https://a.wattpad.com/useravatar/RobertDreger.256.927921.jpg",
      title: "The Rock",
      job: "Actor",
      desc: "Dwayne Douglas Johnson Former WWF wrestler got his nickname from his days in the WWF that was his wretling name. Nowdays hes an actor in many films.",
      id: "1",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeRpy8pLZ5pOskWsRGYm0Gq-p8o-eNS4nwg&usqp=CAU",
      title: "George Bush",
      job: "Ex President",
      desc: "George W. Bush was the president of the USA 2001-2009 from New Haven, Connecticut.",
      id: "2",
    },
    {
      imgSrc:
        "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_2234,w_2237,x_653,y_2/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1598733419/2020-08-29T025829Z_1715667212_RC2ENI9HOEV1_RTRMADP_3_PEOPLE-CHADWICK-BOSEMAN_a8fnmd",
      title: "Chadwick Boseman",
      job: "Actor (R.I.P)",
      desc: "Chadwick Boseman was an actor (Black Panther, 21 Bridges, ect) from Anderson South Carolina.",
      id: "3",
    },
    {
      imgSrc:
        "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/6059/square_thumb%402x.jpg",
      title: "Hugh Jackman",
      job: "Actor",
      desc: "Hugh Jackman is from Sydney, NSW, Australia is 54 years old mostly known for his part as Wolverine in the X-Man movies .",
      id: "4",
    },
  ];

  useEffect(() => {
    setDemoCards(demoCardsArr);
  }, []);

  return (
    <>
      <div
        className="cards-wrapper container d-flex justify-content-center flex-wrap"
        ref={componentRef}
      >
        {demoCards &&
          demoCards.map((item) => {
            return (
              <div
                className="card demo-card mx-4 my-4"
                key={`demo-card-key-${item.id}`}
                //   ref={componentRef}
                id={`demo-card-id-${item.id}`}
              >
                <img
                  src={item.imgSrc}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-title">{item.job}</h6>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="btn-wrapper d-flex justify-content-center">
        <button className="btn btn-dark" onClick={handlePrint}>
          Print 🖨
        </button>
      </div>
    </>
  );
};

export default DemoCards;
