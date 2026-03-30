"use client";
import { words } from "@/constants";
import React, { useEffect, useRef } from "react";
import AnimatedButton from "../animated-button";
import HeroExperience from "../hero-models/hero-experience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../animated-counter";
import ModelViewer from "../hero-models/hero-luffy";

function Hero() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image zoom-in
    tl.fromTo(
      imgRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 1.5, ease: "power3.out" },
    );

    // Overlay fade-in
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=1", // overlap animation
    );
  }, []);

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

      <div className="hero-layout relative overflow-hidden mb-8">
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="relative w-full">
            {/* Image */}
            <img
              ref={imgRef}
              src="/images/asta.jpg"
              alt="Asta"
              className="w-full block"
            />

            {/* Black overlay */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-black/50 pointer-events-none"
            ></div>
          </div>
        </div>
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
            {/* <HeroExperience /> */}
            {/* <ModelViewer /> */}
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
}

export default Hero;
