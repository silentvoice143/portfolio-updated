import Navbar from "@/components/navbar";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import FeatureCards from "@/components/sections/feature-cards";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import ShowCase from "@/components/sections/show-case";
import Skills from "@/components/sections/skill";
import TechLogo from "@/components/sections/tech-logo";
import Testimonials from "@/components/sections/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Navbar />
      <Hero />
      <ShowCase />
      <Skills />
      {/* <TechLogo /> */}
      <FeatureCards />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
