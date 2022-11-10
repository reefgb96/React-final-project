import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BizCards from "./BizCards";
import "../style/main/sortBtn.css";

let initialBizCardArray = [];
const AllCards = () => {
  const [cards, setCards] = useState(initialBizCardArray);
  const [findInput, setFindInput] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/cards/cards`);
        initialBizCardArray = data;
        setCards(initialBizCardArray);
      } catch {
        //handle error.
      }
    })();
  }, []);

  let CardsDataCopy = JSON.parse(JSON.stringify(initialBizCardArray));

  useEffect(() => {
    let regex = new RegExp(findInput, "i");
    CardsDataCopy = CardsDataCopy.filter((item) => regex.test(item.title));
    setCards(CardsDataCopy);
  }, [findInput]);

  const handleFindInputChange = (ev) => {
    setFindInput(ev.target.value);
  };

  const handleSortAsc = () => {
    CardsDataCopy = CardsDataCopy.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    setCards(CardsDataCopy);
  };

  const handleSortDesc = () => {
    CardsDataCopy = CardsDataCopy.sort((a, b) => {
      return a.title > b.title ? -1 : 1;
    });
    setCards(CardsDataCopy);
  };

  const handleResetFilters = () => {
    setCards(CardsDataCopy);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5">
      <div className="page-title w-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-dark mb-5">All Cards</h1>
        <div className="input-wrapper d-flex justify-content-between align-items-center w-75 mb-4 ">
          <div className="find-input d-flex justify-content-center">
            <input
              className="w-100"
              type="search"
              value={findInput}
              onChange={handleFindInputChange}
              placeholder="Search..."
            />
          </div>
          <div className="sort-wrapper">
            <button
              className="sort-btn btn btn-dark mx-1"
              onClick={handleSortAsc}
            >
              ⬆ Sort A-Z
            </button>
            <button
              className="sort-btn btn btn-dark mx-1"
              onClick={handleSortDesc}
            >
              ⬇ Sort Z-A
            </button>
            <button
              className="sort-btn btn btn-dark mx-1"
              onClick={handleResetFilters}
            >
              ❌ Reset
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {cards &&
          cards.map((item) => {
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
                key={`card-key-${item._id}`}
                moreInfoLink={item._id}
                editCardLink={item._id}
                displayBtnMoreInfo={true}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AllCards;
