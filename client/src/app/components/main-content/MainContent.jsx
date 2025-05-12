import ScrollReveal from "../react-bits/ScrollReveal";
import Bio from "./Bio";
import { HowYouWork } from "./HowYouWork";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

const MainContent = () => {
  return (
    <>
      <Bio />
      <HowYouWork />
      {/* <WorkExperience /> */}
      <Projects />
    </>
  );
};

export default MainContent;
