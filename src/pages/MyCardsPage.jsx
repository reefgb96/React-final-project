import React from "react";
import DisplayCards from "components/main/DisplayCards";

const MyCardsPage = () => {
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
