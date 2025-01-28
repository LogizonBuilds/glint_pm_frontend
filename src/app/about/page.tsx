import React from "react";
import HeroAboutUs from "@/components/HeroAboutUs";
import AboutUs from "@/components/AboutUs";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <HeroAboutUs />
      <AboutUs />
    </div>
  );
};

export default About;
