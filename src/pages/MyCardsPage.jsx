import React, { useState } from "react";
import DisplayCards from "components/main/DisplayCards";
import Filters from "components/main/Filters";

const MyCardsPage = () => {
<<<<<<< HEAD
=======
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

>>>>>>> 2f5f23356c1f327c8c5097d628013141b193c578
  return (
    <>
      <DisplayCards
        url="/cards/my-cards"
        title="My Cards"
        displayBtnMoreInfo={true}
        displayBtnEdit={true}
        displayBtnDelete={true}
      />
      ;
    </>
  );
};

export default MyCardsPage;
