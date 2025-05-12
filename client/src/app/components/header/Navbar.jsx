"use client";

import React, { useState } from "react";
import useWindowResize from "../../custom-hooks/UseWindowResize";
import { Logs, Github, linkedin, Linkedin } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { height } = useWindowResize();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowHamburgerMenu(true);
    document.documentElement.style.overflow = "hidden";
  };
  const handleCloseMenu = () => {
    setShowHamburgerMenu(false);
    document.documentElement.style.overflow = "auto";
  };

  return (
    <>
      {/* Large screen navbar starts*/}
      <nav className="hidden sm:flex fixed top-10 z-50 justify-around items-center w-[90%] text-neutral-200 font-semibold text-lg max-w-5xl bg-black/30 backdrop-blur-lg backdrop-brightness-75 border border-neutral-800 h-20 rounded-3xl">
        <div>
          <h1
            style={{ fontFamily: "Bonheur Royale" }}
            className="text-[#9b3dff] font-semibold text-2xl"
          >
            James Attia
          </h1>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5">
            <li className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm">
              <a href="#how-you-work">How I Work</a>
            </li>
            <li className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm">
              <a href="#case-studies">Case Studies</a>
            </li>
            {/*             <li className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm">
              <a href="#work-experience">Work Experience</a>
            </li> */}

            {/*   <li className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm">
              <a href="/james_attia_resume.pdf" target="_blank">
                Resume
              </a>
            </li> */}
          </ul>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-2">
            <li>
              <Link
                href="https://www.linkedin.com/in/jatti045uottawa/"
                target="_blank"
              >
                <Linkedin size={30} />
              </Link>
            </li>
            <p>|</p>
            <li>
              <Link href="https://github.com/Jatti045" target="_blank">
                <Github size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Large screen navbar ends*/}

      {/* Small screen navbar starts */}
      <div className="sm:hidden fixed z-50 left-5 top-10">
        {!showHamburgerMenu && (
          <Logs color="white" size={35} onClick={handleOpenMenu} />
        )}
      </div>
      {showHamburgerMenu && (
        <div>
          {/* Overlay starts*/}
          <div
            onClick={handleCloseMenu}
            className=" fixed top-0 left-0 h-screen w-screen z-40 inset-0 bg-black/50"
          ></div>

          {/* Overlay ends  */}

          {/* Small screen navbar content starts*/}
          <nav
            style={{ height }}
            className="animate-[SlideIn_0.5s_ease-out_forwards] text-neutral-200 font-semibold text-md z-50 border-r-1 border-neutral-800 fixed top-0 left-0 w-[80%] bg-black flex flex-col justify-around items-center"
          >
            <div>
              <h1
                style={{ fontFamily: "Bonheur Royale" }}
                className="text-[#9b3dff] text-2xl"
              >
                James Attia
              </h1>
            </div>
            <div>
              <ul className="flex justify-center items-center flex-col gap-10">
                <li
                  onClick={handleCloseMenu}
                  className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm"
                >
                  <a href="#about">About Me</a>
                </li>
                <li
                  onClick={handleCloseMenu}
                  className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm"
                >
                  <a href="#how-you-work">How I Work</a>
                </li>
                <li
                  onClick={handleCloseMenu}
                  className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm"
                >
                  <a href="#case-studies">Case Studies</a>
                </li>
                {/*                 <li className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm">
                  <a href="#">Work Experience</a>
                </li> */}
                {/*                 <li
                  onClick={handleCloseMenu}
                  className="hover:text-[#9b3dff] duration-300 lg:text-lg md:text-md text-sm"
                >
                  <a href="/james_attia_resume.pdf" target="_blank">
                    Resume
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col justify-center items-center gap-4">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/jatti045uottawa/"
                    target="_blank"
                  >
                    <Linkedin size={30} />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Jatti045" target="_blank">
                    <Github size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* Small screen navbar content ends*/}
        </div>
      )}
    </>
  );
};

export default Navbar;
