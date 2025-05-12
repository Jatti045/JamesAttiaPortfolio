import ScrollReveal from "../react-bits/ScrollReveal";

export const HowYouWork = () => {
  return (
    <section
      id="how-you-work"
      className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-20"
    >
      <h2
        style={{ fontFamily: "Bonheur Royale" }}
        className="w-full mt-24 mb-12 text-[#9b3dff] text-5xl md:text-8xl font-normal"
      >
        How I Work
      </h2>

      <ScrollReveal
        baseOpacity={0}
        enableBlur
        baseRotation={0}
        blurStrength={2}
        textClassName="text-neutral-200 text-base md:text-xl lg:text-xl leading-relaxed mx-4 md:mx-10 lg:mx-18"
      >
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            <p className="text-base text-[#9b3dff] md:text-lg lg:text-xl">
              As a UI designer-in-training, I follow a thorough, user-centered
              approach. My process evolves with each project to incorporate
              feedback and data-driven insights.
            </p>

            <ul className="list-disc list-inside space-y-6">
              <li className="text-base md:text-lg lg:text-xl">
                <strong className="font-normal">Research & Empathy:</strong>{" "}
                Deep\ n understanding of user goals through NN/g resources and
                real-world surveys.
              </li>
              <li className="text-base md:text-lg lg:text-xl">
                <strong className="font-normal">
                  Wireframing & Prototyping:
                </strong>{" "}
                Rapid iterations in Figma with interactive mockups.
              </li>
              <li className="text-base md:text-lg lg:text-xl">
                <strong className="font-normal">Heuristic Evaluation:</strong>{" "}
                Nielsen Norman Group principles for UI clarity and efficiency.
              </li>
              <li className="text-base md:text-lg lg:text-xl">
                <strong className="font-normal">User Testing:</strong> Moderated
                peer tests and usability sessions to uncover pain points.
              </li>
              <li className="text-base md:text-lg lg:text-xl">
                <strong className="font-normal">Accessibility Checks:</strong>{" "}
                Ensuring WCAG compliance for all users.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-base text-[#9b3dff] md:text-lg lg:text-xl">
              I leverage modern tools and collaborative practices:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li className="text-base md:text-lg lg:text-xl">
                <span className="font-normal">Figma & Sketch:</span>{" "}
                High-fidelity prototypes with interactive components.
              </li>
              <li className="text-base md:text-lg lg:text-xl">
                <span className="font-normal">Framer Motion & GSAP:</span>{" "}
                Subtle animations to enhance engagement.
              </li>
              <li className="text-base md:text-lg lg:text-xl">
                <span className="font-normal">Zeplin & Abstract:</span> Hand-off
                platforms for smooth developer collaboration.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg lg:text-xl">
              Currently, I’m expanding my expertise through the NN/g UI Design
              course, integrating the latest best practices and continuously
              refining my approach.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
