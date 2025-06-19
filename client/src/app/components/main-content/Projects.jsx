"use client";

import React from "react";
// import axios from "axios";
import SpotlightCard from "../react-bits/SpotlightCart";
import AnimatedContent from "../react-bits/AnimatedContent";
import { Loader2 } from "lucide-react";

// Temporary placeholders for case studies

const Projects = () => {
  // Commented out GitHub data fetching for now
  // const [githubData, setGithubData] = useState(null);

  // useEffect(() => {
  //   const getGithubDataFromServer = async () => {
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/github`
  //     );
  //     const data = response.data.data;
  //     setGithubData(data);
  //   };

  //   getGithubDataFromServer();
  // }, []);

  const projects = [
    {
      id: 2,
      name: `Case Study 1`,
      description: "",
      language: "",
      homepage: "https://service-web-app-iota.vercel.app/",
    },
    {
      id: 2,
      name: `Case Study 2`,
      description: "Coming soon",
      language: "",
      homepage: "https://word-seeker-game.vercel.app/",
    },
    {
      id: 3,
      name: `Case Study 3`,
      description: "Coming soon",
      language: "",
      homepage: "",
    },
    {
      id: 4,
      name: `Case Study 4`,
      description: "Coming soon",
      language: "",
      homepage: "",
    },
    {
      id: 5,
      name: `Case Study 5`,
      description: "Coming soon",
      language: "",
      homepage: "",
    },
    {
      id: 6,
      name: `Case Study 6`,
      description: "Coming soon",
      language: "",
      homepage: "",
    },
  ];

  return (
    <section
      id="case-studies"
      className="flex flex-col justify-center items-center bg-black text-white px-6 md:px-12 lg:px-20 py-8"
    >
      <h1
        style={{ fontFamily: "Bonheur Royale" }}
        className="text-left w-full mt-24 text-[#9b3dff] text-6xl md:text-8xl my-4"
      >
        Case Studies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {projects.map((project) => (
          <AnimatedContent
            key={project.id}
            distance={100}
            direction="vertical"
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
          >
            <SpotlightCard
              className="relative bg-[#121212] border border-[#9b3dff66] min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col justify-between items-start shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_#9b3dff66]"
              spotlightColor="rgba(255, 255, 255, 0.1)"
            >
              {project.homepage !== "" && (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={project.homepage}
                />
              )}

              {/* Project Name */}
              <div>
                <h1 className="text-2xl font-bold text-white mb-3">
                  {project.name.toUpperCase()}
                </h1>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                {/* Language Tag (hidden if empty) */}
                {project.language && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#9b3dff33] text-[#9b3dff] text-sm px-3 py-1 rounded-full">
                      {project.language}
                    </span>
                  </div>
                )}

                {/* Case Study Button */}
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 bg-[#9b3dff] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#7a2fc4] hover:shadow-[0_0_15px_#9b3dff88]"
                >
                  View Case Study
                </a>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Projects;
