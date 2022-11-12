import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../components/style/pages/myCards.css";
import BizCards from "components/main/BizCards";

let initialBizCardArray = [];
const MyCardsPage = () => {
  const [findInput, setFindInput] = useState("");
  const [bizCardsData, setBizCardsData] = useState([]);
  let { search } = useLocation();
  const componentRef = useRef();
  const history = useHistory();

  const query = new URLSearchParams(search);
  let q = query.get("q");
  let sort = query.get("sort");

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

  const filterData = () => {
    let bizCardsDataCopy = JSON.parse(JSON.stringify(initialBizCardArray));
    let regex = new RegExp(findInput, "i");
    bizCardsDataCopy = bizCardsDataCopy.filter((item) =>
      regex.test(item.title)
    );
    setBizCardsData(bizCardsDataCopy);
  };

  const handleFindInputChange = (ev) => {
    setFindInput(ev.target.value);
    q = ev.target.value;
    if (query.get("q")) {
      query.delete("q");
    }
    query.append("q", q);
    // history.push(`my-cards?${query.toString()}`);
  };

  const onEnter = (ev) => {
    q = ev.target.value;
    if (query.get("q")) {
      query.delete("q");
    }
    query.append("q", q);
    if (ev.key === "Enter") {
      filterData();
      history.push(`my-cards?${query.toString()}`);
    }
  };

  const handleSearchClick = (ev) => {
    filterData();
    q = ev.target.value;
    if (query.get("q")) {
      query.delete("q");
    }
    query.append("q", q);
    history.push(`my-cards?${query.toString()}`);
  };

  const handleBizCardDelete = (id) => {
    initialBizCardArray = initialBizCardArray.filter((item) => item._id !== id);
    setBizCardsData(initialBizCardArray);
    console.log(initialBizCardArray);
    axios.delete(`/cards/${id}`);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "no-data",
    onAfterPrint: () => alert("Printed"),
  });

  const handleSortAsc = () => {
    let bizCardsDataCopy = JSON.parse(JSON.stringify(bizCardsData));
    bizCardsDataCopy = bizCardsDataCopy.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    setBizCardsData(bizCardsDataCopy);
    sort = "asc";
    if (query.get("sort")) {
      query.delete("sort");
    }
    query.append("sort", sort);
    history.push(`/my-cards?${query.toString()}`);
  };

  const handleSortDesc = () => {
    let bizCardsDataCopy = JSON.parse(JSON.stringify(bizCardsData));
    bizCardsDataCopy = bizCardsDataCopy.sort((a, b) => {
      return a.title > b.title ? -1 : 1;
    });
    setBizCardsData(bizCardsDataCopy);
    sort = "dec";
    if (query.get("sort")) {
      query.delete("sort");
    }
    query.append("sort", sort);
    history.push(`/my-cards?${query.toString()}`);
  };

  const handleResetFilters = () => {
    setBizCardsData(initialBizCardArray);
    setFindInput("");
    history.push(`my-cards`);
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
              onKeyDown={onEnter}
              placeholder="Search..."
            />
            <button onClick={handleSearchClick} className="btn btn-dark">
              Search
            </button>
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
