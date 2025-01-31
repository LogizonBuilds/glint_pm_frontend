import React from "react";
import HeroServices from "@/components/HeroServices";
import ServicesBody from "@/components/Services";
import Appointment from "@/components/Appointment";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <HeroServices />
      <ServicesBody />
      <Appointment />
    </div>
  );
};

export default Services;
