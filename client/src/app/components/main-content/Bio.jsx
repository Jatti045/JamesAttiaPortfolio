import ScrollReveal from "../react-bits/ScrollReveal";

// =============================
// Original Bio component (commented out for future reference)
// =============================
/*
const Bio = () => {
  return (
    <section
      id="bio"
      className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-16"
    >
      <h1
        style={{ fontFamily: "Bonheur Royale" }}
        className="w-full text-[#9b3dff] text-6xl md:text-8xl font-semibold mb-8"
      >
        Bio
      </h1>
      <ScrollReveal
        baseOpacity={0}
        enableBlur
        baseRotation={0}
        blurStrength={2}
        textClassName="text-white text-xl mx-4 md:mx-10 lg:mx-18"
      >
        <>
          <div className="text-[#9b3dff] leading-0 text-md md:text-lg lg:text-2xl mb-4">
            Hey there, I’m James Attia.
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="font-semibold leading-10 text-sm md:text-lg lg:text-xl text-neutral-200 mb-4">
              I’m not just a developer—I’m a problem solver, a creator, and a
              technologist who sees code as both a craft and an art form. As a
              Software Engineering student at the University of Ottawa, I thrive
              at the intersection of design, technology, and human experience.
            </p>
            <p className="font-semibold leading-10 text-sm md:text-lg lg:text-xl text-neutral-200 mb-4">
              From architecting scalable full-stack applications to
              experimenting with AI-driven innovations, I push beyond
              conventional solutions to create impactful, user-centric digital
              experiences. Every project I take on is an opportunity to
              challenge the status quo—whether it’s building a robust e-commerce
              platform, refining intuitive user interfaces, or exploring new
              ways to bridge technology with creativity.
            </p>
            <p className="font-semibold leading-10 text-sm md:text-lg lg:text-xl text-neutral-200">
              What drives me? Curiosity, a relentless pursuit of excellence, and
              a commitment to making technology more accessible and meaningful.
              I don’t just write code—I craft experiences that stand apart. Take
              a look around. This portfolio is more than just a showcase of my
              work—it’s a testament to my journey, my passion, and my drive to
              build solutions that leave a lasting impression.
            </p>
          </div>
        </>
      </ScrollReveal>
    </section>
  );
};

export default Bio;
*/

// =============================
// Updated "About You" section
// =============================
export const Bio = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-16"
    >
      <h1
        style={{ fontFamily: "Bonheur Royale" }}
        className="w-full mt-24 text-[#9b3dff] text-6xl md:text-8xl mb-8"
      >
        About Me
      </h1>
      <ScrollReveal
        baseOpacity={0}
        enableBlur
        baseRotation={0}
        blurStrength={2}
        textClassName="text-white text-lg mx-4 md:mx-10 lg:mx-18 font-normal"
      >
        <>
          <div className="flex flex-col items-start gap-6">
            <div className="space-y-4">
              <p className="text-[#9b3dff] text-2xl md:text-3xl lg:text-4xl font-semibold">
                Hello! I’m James Attia.
              </p>

              {/* Intro paragraphs */}
              <div className="space-y-6">
                <p className="text-base md:text-lg lg:text-xl">
                  A dedicated Software Engineering student at the University of
                  Ottawa with a passion for blending code and creativity to
                  craft meaningful digital experiences.
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  My journey in tech has led me through full-stack development,
                  AI experimentation, and UI design—each project inspiring me to
                  push the boundaries of what's possible.
                </p>
              </div>

              {/* Personal interests */}
              <div className="space-y-6">
                <p className="text-base md:text-lg lg:text-xl">
                  When I’m not coding, you’ll find me hiking scenic trails,
                  experimenting with digital art, or tuning into the latest tech
                  podcasts to stay ahead of emerging trends.
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Collaboration is at the heart of everything I do—whether it’s
                  pair-programming, peer design critiques, or open-source
                  contributions, I thrive on shared creativity.
                </p>
              </div>

              {/* Call to action */}
              <div className="space-y-6">
                <p className="text-base md:text-lg lg:text-xl">
                  Feel free to connect on{" "}
                  <a
                    href="https://linkedin.com/in/james-attia"
                    className="underline hover:text-[#9b3dff]"
                  >
                    LinkedIn
                  </a>{" "}
                  or send me a message to explore potential collaborations.
                  Let’s build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </>
      </ScrollReveal>
    </section>
  );
};

export default Bio;
