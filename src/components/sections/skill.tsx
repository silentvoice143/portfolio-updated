"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Edit this with your real stack — grouped the way you want it to read
const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],
  },

  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Vercel", "AWS"],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto">
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-4">
          Skills
        </h2>
        <p className="text-white-50 md:text-xl max-w-2xl mb-14">
          Technologies and tools I use to design, build, and ship products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:border-white/20 transition-colors"
            >
              <h3 className="text-white text-lg font-medium mb-5">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-white-50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
