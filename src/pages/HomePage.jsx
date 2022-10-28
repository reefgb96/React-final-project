import React from "react";
import Welcome from "components/main/Welcome";
import HeroHomePage from "components/main/HeroHomePage";
import ExtProjects from "components/main/ExtProjects";

const HomePage = () => {
  return (
    <div>
      {/* <Welcome /> */}
      <HeroHomePage />
      <ExtProjects />
    </div>
  );
};

export default HomePage;
