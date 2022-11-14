import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFetch from "hooks/useFetch";

const Filters = (url) => {
  let { data: bizCardsData, setData: setBizCardsData } = useFetch(url);
  const [findInput, setFindInput] = useState("");
  let { search, pathname } = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(search);
  let q = query.get("q");
  let sort = query.get("sort");

  const handleFindInputChange = (ev) => {
    setFindInput(ev.target.value);
  };

  const onEnter = (ev) => {
    q = ev.target.value;
    if (query.get("q")) {
      query.delete("q");
    }
    query.append("q", q);
    if (ev.key === "Enter") {
      q &&
        history.push(
          pathname === "/my-cards"
            ? `/my-cards?${query.toString()}`
            : `/?${query.toString()}`
        );
    }
  };

  const handleSearchClick = () => {
    q = findInput;
    if (query.get("q")) {
      query.delete("q");
    }
    query.append("q", q);
    q &&
      history.push(
        pathname === "/my-cards"
          ? `/my-cards?${query.toString()}`
          : `/?${query.toString()}`
      );
  };

  const handleSortAsc = () => {
    sort = "asc";
    let bizCardsDataCopy = JSON.parse(JSON.stringify(bizCardsData));
    setBizCardsData(bizCardsDataCopy);
    if (query.get("sort")) {
      query.delete("sort");
    }
    query.append("sort", sort);
    history.push(
      pathname === "/my-cards"
        ? `/my-cards?${query.toString()}`
        : `/?${query.toString()}`
    );
  };

  const handleSortDesc = () => {
    sort = "dec";
    let bizCardsDataCopy = JSON.parse(JSON.stringify(bizCardsData));
    setBizCardsData(bizCardsDataCopy);
    if (query.get("sort")) {
      query.delete("sort");
    }
    query.append("sort", sort);
    history.push(
      pathname === "/my-cards"
        ? `/my-cards?${query.toString()}`
        : `/?${query.toString()}`
    );
  };

  const handleResetFilters = () => {
    setBizCardsData(bizCardsData);
    setFindInput("");
    history.push(pathname.includes("/my-cards") ? `/my-cards` : `/`);
  };

  return (
    <div>
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
  );
};

export default Filters;
