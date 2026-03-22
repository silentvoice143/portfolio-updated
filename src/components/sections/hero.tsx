"use client";
import { words } from "@/constants";
import React from "react";
import AnimatedButton from "../animated-button";
import HeroExperience from "../hero-models/hero-experience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../animated-counter";

function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={"/images/bg.png"} alt={"background"} />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full  w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((item, idx) => (
                      <span
                        key={`${item.text}-${idx}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={item.imgPath}
                          alt={item.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{item.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text z-10">
              Hi, I'm Satyam, a developer based in Hazaribagh with a passion for
              code & bugs.
            </p>
            <AnimatedButton
              className="md:w-80 md-h-16 w-60 h-12"
              id="counter"
              text="See My Works"
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout ">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
}

export default Hero;
