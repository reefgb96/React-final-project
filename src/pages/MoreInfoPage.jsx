import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BizCards from "components/main/BizCards";

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
        console.log(cardInfo);
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
      console.log(cardInfo);
      console.log(initialCardData);
    })();
  }, []);

  return (
    <div>
      {
        // cardInfo.map((item) => {
        //   return (
        <BizCards
          name={cardInfo.title}
          imgSrc={cardInfo.image}
          imgAlt={cardInfo.image}
          subtitle={cardInfo.subTitle}
          desc={cardInfo.description}
          phone={cardInfo.phone}
          address={cardInfo.address}
          id={cardInfo._id}
          key={`card-key-${cardInfo._id}`}
          navigateTo={cardInfo._id}
        />
        //   )

        // })
      }
    </div>
  );
};

export default MoreInfoPage;
{
  /* {cardInfo &&
  cardInfo.map((item) => {
    <div class="card" style="width: 18rem;">
      <img
        src={item.image.url}
        class="card-img-top"
        alt={cardInfo.name}
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
      </div>
    </div>;
  })} */
}
