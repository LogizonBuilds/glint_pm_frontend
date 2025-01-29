import React from "react";
import HeroServices from "@/components/HeroServices";
import ServicesBody from "@/components/Services";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <HeroServices />
      <ServicesBody />
    </div>
  );
};

export default Services;
