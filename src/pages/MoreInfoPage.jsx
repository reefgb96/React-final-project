import React, { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "hooks/useFetch";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import BizCards from "components/main/BizCards";
import "../components/style/pages/moreInfoPage.css";

let initialCardData = [];
const MoreInfoPage = () => {
  let { id } = useParams();
  const { data: cardInfo } = useFetch(`/cards/card/${id}`);
  const history = useHistory();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "no-data",
    onAfterPrint: () =>
      toast.success("🦄 Printed!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
  });

  let dateCreated = cardInfo.createdAt;
  dateCreated = dateCreated?.replaceAll("-", "/").slice(0, 10);

  return (
    <>
      <button
        onClick={() => {
          history.goBack();
        }}
        className="btn-back m-2"
      >
        ⬅ Go back
      </button>
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
            displayBtnEdit={true}
            displayBtnDelete={true}
            forwardRef={componentRef}
            hover={false}
          />
        )}
        <button className={`btn btn-dark print-btn mt-5`} onClick={handlePrint}>
          Print 🖨
        </button>
      </div>
    </>
  );
};

export default MoreInfoPage;
