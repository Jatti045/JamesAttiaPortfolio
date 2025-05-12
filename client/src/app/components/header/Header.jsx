import React from "react";

import HeaderLogoWall from "./HeaderLogoWall";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import HeaderVisual from "./HeaderVisual";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <HeaderVisual />
      <div className=" min-h-screen top-10 flex flex-col justify-center items-center absolute w-[90%] max-w-7xl">
        <Navbar />
        <div className="w-full flex flex-col justify-center items-start">
          <HeaderTitle />
          <HeaderContent />
          <HeaderLogoWall />
        </div>
      </div>
    </div>
  );
};

export default Header;
