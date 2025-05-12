import React from "react";
import GradientText from "../react-bits/GradientText";
import FadeContent from "../react-bits/FadeContent";
import RotatingText from "../react-bits/RotatingText";

const HeaderTitle = () => {
  return (
    <div>
      {/* Fade animation */}
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        {/*  Gradient text */}
        <div>
          <GradientText
            colors={["#9b3dff", "#f0e0ff", "#9b3dff", "#e0c8ff", "#e6d9f7"]}
            animationSpeed={8}
            showBorder={false}
            className="text-3xl leading-10 md:leading-18 md:text-5xl lg:text-7xl"
          >
            <h1>Hello, I'm James</h1>
          </GradientText>
        </div>
        {/* Gradient with rotating text  */}
        <div className="flex justify-center items-center gap-4">
          <div>
            <GradientText
              colors={["#9b3dff", "#f0e0ff", "#9b3dff", "#e0c8ff", "#e6d9f7"]}
              animationSpeed={8}
              showBorder={false}
              className="text-3xl leading-10 md:leading-18 md:text-5xl lg:text-7xl"
            >
              <h1 className="inline-block">A Software</h1>
            </GradientText>
          </div>
          <div className="inline-block">
            <RotatingText
              style={{ fontFamily: "Bonheur Royale" }}
              texts={["Developer", "Designer", "Engineer"]}
              mainClassName="text-5xl md:text-7xl lg:text-8xl leading-15 md:leading-20 lg:leading-26 font-semibold text-[#9b3dff]"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default HeaderTitle;
