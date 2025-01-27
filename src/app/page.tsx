"use client";

import Hero from "@/components/Hero";
import Enquiry from "@/components/Enquiry";

import WhatWeDo from "@/components/WhatWeDo";

import WhoWeAre from "@/components/WhoWeAre";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";



export default function Home() {

  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <Stats />
      <Clients />
      <Enquiry />
    </>
  );
}
