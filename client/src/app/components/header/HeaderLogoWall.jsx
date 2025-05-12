import React from "react";
import LogoWall from "../react-bits/LogoWall";
import FadeContent from "../react-bits/FadeContent";

const HeaderLogoWall = () => {
  const logoImgs = [
    { imgUrl: "/assets/Tailwind CSS.png", altText: "Tailwind CSS Logo" },
    { imgUrl: "/assets/JavaScript.png", altText: "JavaScript Logo" },
    { imgUrl: "/assets/TypeScript.png", altText: "TypeScript Logo" },
    { imgUrl: "/assets/Next.js.png", altText: "Next.js Logo" },
    { imgUrl: "/assets/React.png", altText: "React Logo" },
    { imgUrl: "/assets/Node.js.png", altText: "Node.js Logo" },
    { imgUrl: "/assets/Express.png", altText: "Express Logo" },
    { imgUrl: "/assets/Postman.png", altText: "Postman Logo" },
    { imgUrl: "/assets/MongoDB.png", altText: "MongoDB Logo" },
    { imgUrl: "/assets/Mongoose.js.png", altText: "Mongoose Logo" },
    { imgUrl: "/assets/Java.png", altText: "Java Logo" },
    { imgUrl: "/assets/Python.png", altText: "Python Logo" },
    { imgUrl: "/assets/GitHub.png", altText: "GitHub Logo" },
    { imgUrl: "/assets/GitHubActions.png", altText: "GitHub Actions Logo" },
  ];

  return (
    <div className="w-full mt-2 ">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
          bgColor="#060606"
          bgAccentColor="#111111"
        />
      </FadeContent>
    </div>
  );
};

export default HeaderLogoWall;
