import React, { useState, useEffect, useRef } from "react";
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
    })();
  }, []);

  let dateCreated = cardInfo.createdAt;
  dateCreated = dateCreated?.replaceAll("-", "/").slice(0, 10);

  return (
    <>
      <Link to="/my-cards" className="btn-back m-2">
        ⬅ Go back
      </Link>
      <div className="d-flex flex-column align-items-center justify-content-center p-5">
        <h1 className="mb-5">Business Card: {cardInfo.title}</h1>
        <h5 className="mb-5">Created at: {dateCreated}</h5>
        {cardInfo && (
          <BizCards
            name={cardInfo.title}
            imgSrc={cardInfo.image?.url}
            imgAlt={cardInfo.image?.alt}
            subtitle={cardInfo.subTitle}
            desc={cardInfo.description}
            phone={cardInfo.phone}
            address={cardInfo.address}
            id={cardInfo._id}
            key={`card-key-${cardInfo._id}`}
            moreInfoLink={cardInfo._id}
            editCardLink={cardInfo._id}
            displayBtnMoreInfo={false}
          />
        )}
      </div>
    </>
  );
};

export default MoreInfoPage;
