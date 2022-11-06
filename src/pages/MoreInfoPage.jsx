import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BizCards from "components/main/BizCards";
import "../components/style/pages/moreInfoPage.css";

let initialCardData = [];
const MoreInfoPage = () => {
  const [cardInfo, setCardInfo] = useState(initialCardData);
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/cards/card/${id}`);
        initialCardData = data;
        setCardInfo(initialCardData);
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
      console.log(initialCardData);
    })();
  }, []);

  let newCardInfo = JSON.parse(JSON.stringify(cardInfo));
  // let dateCreated = newCardInfo.createdAt.replaceAll("-", " ").slice(0, 10);

  return (
    <>
      <Link to="/my-cards" className="btn-back">
        ⬅ Go back
      </Link>
      <div className="d-flex flex-column align-items-center justify-content-center p-5">
        <h1 className="mb-5">Business Card: {newCardInfo.title}</h1>
        {/* <h5 className="mb-5">Created at: {dateCreated}</h5> */}
        {
          <BizCards
            name={newCardInfo.title}
            imgSrc={newCardInfo.image}
            imgAlt={newCardInfo.image}
            subtitle={newCardInfo.subTitle}
            desc={newCardInfo.description}
            phone={newCardInfo.phone}
            address={newCardInfo.address}
            id={newCardInfo._id}
            key={`card-key-${newCardInfo._id}`}
            moreInfoLink={newCardInfo._id}
            editCardLink={newCardInfo._id}
          />
        }
      </div>
    </>
  );
};

export default MoreInfoPage;
