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

  useEffect(() => {
    let regex = new RegExp(findInput, "i");
    let bizCardsDataCopy = JSON.parse(JSON.stringify(initialBizCardArray));
    bizCardsDataCopy = bizCardsDataCopy.filter((item) =>
      regex.test(item.title)
    );
    setBizCardsData(bizCardsDataCopy);
  }, [findInput]);

  const handleFindInputChange = (ev) => {
    setFindInput(ev.target.value);
  };

  const handleBizCardDelete = (id) => {
    console.log(initialBizCardArray);
    initialBizCardArray = initialBizCardArray.filter((item) => item._id !== id);
    setBizCardsData(initialBizCardArray);
    console.log(bizCardsData);
    console.log(initialBizCardArray);
    // change to DEL axios request to permanently delete from user data.
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "no-data",
    onAfterPrint: () => alert("Printed"),
  });

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5">
      <div className="page-title w-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-dark mb-5">My Cards</h1>
        <div className="wrapper d-flex justify-content-center align-items-center w-100 mb-4">
          <div className="find-input d-flex justify-content-end w-100">
            <input
              className="w-50"
              type="search"
              value={findInput}
              onChange={handleFindInputChange}
              placeholder="Search..."
            />
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
                navigateTo={item._id}
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
