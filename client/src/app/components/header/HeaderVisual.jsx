import React from "react";
import Squares from "../react-bits/Squares";

const HeaderVisual = () => {
  return (
    <div>
      <Squares
        speed={0.5}
        squareSize={100}
        direction="diagonal"
        borderColor="#222222"
        hoverFillColor="#222"
      />
    </div>
  );
};

export default HeaderVisual;
