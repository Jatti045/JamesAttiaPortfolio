import React from "react";
import FadeContent from "../react-bits/FadeContent";

const HeaderContent = () => {
  return (
    <div>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="font-semibold text-md  md:text-lg lg:text-xl text-neutral-200 leading-8">
          Full-stack developer and software engineering student merging
          architectural/design patterns with hands-on development skills.
          Creating <span>scalable</span> solutions through a blend of
          engineering principles and modern web technologies.
        </p>
      </FadeContent>
    </div>
  );
};

export default HeaderContent;
