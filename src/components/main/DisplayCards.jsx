import React, { useState, useRef, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import useFetch from "hooks/useFetch";
import { useReactToPrint } from "react-to-print";
import BizCards from "components/main/BizCards";
import "../style/pages/myCards.css";
import Filters from "./Filters";

const DisplayCards = ({
  url,
  title,
  displayBtnMoreInfo,
  displayBtnEdit,
  displayBtnDelete,
}) => {
  let { data: bizCardsData, setData: setBizCardsData } = useFetch(url);
  let { search } = useLocation();
  const componentRef = useRef();
  const history = useHistory();

  const query = new URLSearchParams(search);
  let q = query.get("q");
  let sort = query.get("sort");

  const handleBizCardDelete = (id) => {
    let bizCardsDataCopy = JSON.parse(JSON.stringify(bizCardsData));
    bizCardsDataCopy = bizCardsDataCopy.filter((item) => item._id !== id);
    setBizCardsData(bizCardsDataCopy);
    axios.delete(`/cards/${id}`);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "no-data",
    onAfterPrint: () => alert("Printed"),
  });

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5">
      <div className="page-title w-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-dark mb-5">{title}</h1>
        <Filters url={url} />
      </div>
      <div
        ref={componentRef}
        className="container-fluid d-flex flex-wrap justify-content-center"
      >
        {bizCardsData &&
          bizCardsData
            .filter((card) => (q ? card.title.toLowerCase().includes(q) : true))
            .sort((a, b) => {
              if (sort) {
                if (sort === "asc") {
                  return a.title > b.title ? 1 : -1;
                } else {
                  return a.title < b.title ? 1 : -1;
                }
              }
            })
            .map((item) => {
              return (
                <BizCards
                  name={item.title}
                  imgSrc={item.image.url}
                  imgAlt={item.image.alt}
                  subtitle={item.subTitle}
                  desc={item.description}
                  phone={item.phone}
                  address={item.address}
                  id={item._id}
                  onDelete={handleBizCardDelete}
                  key={`card-key-${item._id}`}
                  moreInfoLink={item._id}
                  editCardLink={item._id}
                  displayBtnMoreInfo={displayBtnMoreInfo}
                  displayBtnEdit={displayBtnEdit}
                  displayBtnDelete={displayBtnDelete}
                  hover={true}
                />
              );
            })}
      </div>
      <button className={`btn btn-dark print-btn mt-5`} onClick={handlePrint}>
        Print All 🖨
      </button>
    </div>
  );
};

export default DisplayCards;
