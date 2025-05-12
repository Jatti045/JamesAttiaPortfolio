"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Recursive function to process children:
const processNode = (node, keyPrefix = "") => {
  if (typeof node === "string") {
    // Split string on whitespace, preserving spaces.
    return node.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={`${keyPrefix}-${index}`}>
          {word}
        </span>
      );
    });
  } else if (React.isValidElement(node)) {
    // Recursively process children of this element.
    return React.cloneElement(node, {
      children: React.Children.map(node.props.children, (child, i) =>
        processNode(child, `${keyPrefix}-${i}`)
      ),
    });
  } else {
    return node;
  }
};

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 0,
  blurStrength = 2,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    return React.Children.map(children, (child, index) =>
      processNode(child, index)
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Rotation animation
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll(".word");

    // Opacity animation
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    // Blur animation (if enabled)
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
