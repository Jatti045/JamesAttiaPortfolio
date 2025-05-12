"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "wrapper",
    direction === "vertical" && "wrapper--vertical",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "marquee",
    direction === "vertical" && "marquee--vertical",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor, // Still defined for potential use elsewhere
        "--color-bg-accent": bgAccentColor,
        overflow: "hidden",
        backgroundColor: "transparent", // Changed to transparent
        position: "relative",
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        style={{
          display: "flex",
          flexDirection: direction === "vertical" ? "column" : "row",
          animation: `marquee var(--duration) linear infinite`,
          ...(isPaused && { animationPlayState: "paused" }),
        }}
      >
        <div
          className="marquee__group"
          style={{
            display: "flex",
            flexDirection: direction === "vertical" ? "column" : "row",
          }}
        >
          <TooltipProvider>
            {items.map((item, idx) => (
              <Tooltip>
                <TooltipTrigger>
                  <img
                    key={idx}
                    src={item.imgUrl}
                    alt={item.altText}
                    style={{
                      width: "var(--size)",
                      height: "auto",
                      margin: "0.5rem",
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent className={"bg-zinc-900 text-white font-bold"}>
                  <p>{item.altText}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <div
          className="marquee__group"
          aria-hidden="true"
          style={{
            display: "flex",
            flexDirection: direction === "vertical" ? "column" : "row",
          }}
        >
          <TooltipProvider>
            {items.map((item, idx) => (
              <Tooltip>
                <TooltipTrigger>
                  <img
                    key={`dup1-${idx}`}
                    src={item.imgUrl}
                    alt={item.altText}
                    style={{
                      width: "var(--size)",
                      height: "auto",
                      margin: "0.5rem",
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent className={"bg-zinc-900 text-white font-bold"}>
                  <p>{item.altText}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>

      <div
        className={`${marqueeClass} marquee--reverse`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        style={{
          display: "flex",
          flexDirection: direction === "vertical" ? "column" : "row",
          animation: `marquee var(--duration) linear infinite reverse`,
          ...(isPaused && { animationPlayState: "paused" }),
        }}
      >
        <div
          className="marquee__group"
          style={{
            display: "flex",
            flexDirection: direction === "vertical" ? "column" : "row",
          }}
        >
          <TooltipProvider>
            {items.map((item, idx) => (
              <Tooltip>
                <TooltipTrigger>
                  <img
                    key={`rev-${idx}`}
                    src={item.imgUrl}
                    alt={item.altText}
                    style={{
                      width: "var(--size)",
                      height: "auto",
                      margin: "0.5rem",
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent className={"bg-zinc-900 text-white font-bold"}>
                  <p>{item.altText}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <div
          className="marquee__group"
          aria-hidden="true"
          style={{
            display: "flex",
            flexDirection: direction === "vertical" ? "column" : "row",
          }}
        >
          <TooltipProvider>
            {items.map((item, idx) => (
              <Tooltip>
                <TooltipTrigger>
                  <img
                    key={`dup2-${idx}`}
                    src={item.imgUrl}
                    alt={item.altText}
                    style={{
                      width: "var(--size)",
                      height: "auto",
                      margin: "0.5rem",
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent className={"bg-zinc-900 text-white font-bold"}>
                  <p>{item.altText}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate ${direction === "vertical" ? "Y(0)" : "X(0)"};
          }
          100% {
            transform: translate
              ${direction === "vertical" ? "Y(-50%)" : "X(-50%)"};
          }
        }
        .wrapper {
          width: 100%;
          height: ${direction === "vertical" ? "var(--size)" : "auto"};
        }
        .marquee {
          width: 100%;
          white-space: nowrap;
        }
        .marquee--vertical {
          height: 100%;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </article>
  );
}

export default LogoWall;
