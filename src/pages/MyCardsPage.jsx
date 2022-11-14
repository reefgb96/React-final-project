import React, { useState } from "react";
import DisplayCards from "components/main/DisplayCards";
import Filters from "components/main/Filters";

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
