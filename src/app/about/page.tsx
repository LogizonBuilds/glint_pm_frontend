import React from "react";
import HeroAboutUs from "@/components/HeroAboutUs";
import AboutUs from "@/components/AboutUs";
import GrowBusiness from "@/components/GrowBusiness";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <HeroAboutUs />
      <AboutUs />
      {/* <GrowBusiness /> */}
    </div>
  );
};

export default About;
