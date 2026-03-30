"use client";
import { logoIconsList } from "@/constants";
import React from "react";
import { div } from "three/tsl";
type IconProp = {
  icon: { imgPath: string; name: string };
};
const LogoIcon = ({ icon }: IconProp) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

function TechLogo() {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((logo, index) => (
            <LogoIcon icon={logo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechLogo;
