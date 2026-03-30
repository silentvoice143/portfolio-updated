import Navbar from "@/components/navbar";
import FeatureCards from "@/components/sections/feature-cards";
import Hero from "@/components/sections/hero";
import ShowCase from "@/components/sections/show-case";
import TechLogo from "@/components/sections/tech-logo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      {/* <TechLogo /> */}
      <FeatureCards />
    </>
  );
}
