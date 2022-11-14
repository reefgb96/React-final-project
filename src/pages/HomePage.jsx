import React from "react";
import { useSelector } from "react-redux";
import HeroHomePage from "components/main/HeroHomePage";
import ExtProjects from "components/main/ExtProjects";
import DisplayCards from "components/main/DisplayCards";

const HomePage = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div>
      {!loggedIn ? (
        <>
          <HeroHomePage />
          <ExtProjects />
        </>
      ) : (
        <DisplayCards
          url="/cards/cards"
          title="Business Cards"
          displayBtnMoreInfo={true}
          displayBtnEdit={false}
          displayBtnDelete={false}
        />
      )}
    </div>
  );
};

export default HomePage;
