import React from "react";
import { useSelector } from "react-redux";
import HeroHomePage from "components/main/HeroHomePage";
import ExtProjects from "components/main/ExtProjects";
import AllCards from "components/main/AllCards";

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
        <AllCards />
      )}
    </div>
  );
};

export default HomePage;
