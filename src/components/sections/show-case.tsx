"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT  */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper bg-white overflow-hidden rounded-2xl">
              <img
                src="/images/projects/blogspot.png"
                alt="BlogSpot Project"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-content">
              <h2>
                A Full-Stack Blogging Platform Built for Creating, Publishing,
                and Discovering Content
              </h2>
              <p className="text-white-50 md:text-xl">
                A modern blogging platform where users can create and manage
                posts, explore content by interests, follow creators, and
                interact with personalized content through a responsive and
                intuitive interface.
              </p>
            </div>
          </div>
          {/* RIGHT  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/projects/credex.png"
                  alt="Library Management"
                />
              </div>
              <h2>
                Cut SaaS Costs with AI-Powered Spend Analysis and Optimization
              </h2>
              <p className="text-white-50 md:text-xl mt-4">
                An AI-powered SaaS audit platform that analyzes software
                spending, identifies unused licenses and optimization
                opportunities, and generates actionable reports to help
                businesses reduce recurring costs.
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/images/projects/lexiquest.png" alt="YC Directory" />
              </div>
              <h2>
                LexiQuest-Vocab App (Master Vocabulary Through Structured
                Learning, Practice, and Progress Tracking)
              </h2>
              <p className="text-white-50 md:text-xl mt-4">
                An offline-first vocabulary learning and test preparation app
                featuring downloadable question packs, structured learning
                modules, practice tests, progress tracking, and detailed
                performance reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
