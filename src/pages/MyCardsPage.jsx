import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import "../components/style/pages/myCards.css";
import BizCards from "components/main/BizCards";

let initialBizCardArray = [];
const MyCardsPage = () => {
  const [findInput, setFindInput] = useState("");
  const [bizCardsData, setBizCardsData] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards/my-cards");
        initialBizCardArray = data;
        setBizCardsData(initialBizCardArray);
      } catch {
        toast.error("😭 Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })();
  }, []);
  let bizCardsDataCopy = JSON.parse(JSON.stringify(initialBizCardArray));

  useEffect(() => {
    let regex = new RegExp(findInput, "i");
    bizCardsDataCopy = bizCardsDataCopy.filter((item) =>
      regex.test(item.title)
    );
    setBizCardsData(bizCardsDataCopy);
  }, [findInput]);

  const handleFindInputChange = (ev) => {
    setFindInput(ev.target.value);
  };

  const handleBizCardDelete = (id) => {
    initialBizCardArray = initialBizCardArray.filter((item) => item._id !== id);
    setBizCardsData(initialBizCardArray);
    console.log(initialBizCardArray);
    axios.delete(`/cards/${id}`);
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "no-data",
    onAfterPrint: () => alert("Printed"),
  });

  const handleSortAsc = () => {
    bizCardsDataCopy = bizCardsDataCopy.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    setBizCardsData(bizCardsDataCopy);
  };

  const handleSortDesc = () => {
    bizCardsDataCopy = bizCardsDataCopy.sort((a, b) => {
      return a.title > b.title ? -1 : 1;
    });
    setBizCardsData(bizCardsDataCopy);
  };

  const handleResetFilters = () => {
    setBizCardsData(initialBizCardArray);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5">
      <div className="page-title w-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-dark mb-5">My Cards</h1>
        <div className=" d-flex justify-content-center align-items-center w-100 mb-4">
          <div className="find-input d-flex justify-content-end w-100">
            <input
              className="w-50"
              type="search"
              value={findInput}
              onChange={handleFindInputChange}
              placeholder="Search..."
            />
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
          <div className="create-card-wrapper d-flex justify-content-end w-50">
            <Link
              to={"/createCard"}
              className="create-card-btn btn btn-dark mx-4"
            >
              Create Card
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={componentRef}
        className="container-fluid d-flex flex-wrap justify-content-center"
      >
        {bizCardsData &&
          bizCardsData.map((item) => {
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
                // itemKey={`card-key-${item._id}`}
                key={`card-key-${item._id}`}
                moreInfoLink={item._id}
                editCardLink={item._id}
                displayBtnMoreInfo={true}
                displayBtnEdit={true}
                displayBtnDelete={true}
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

export default MyCardsPage;
