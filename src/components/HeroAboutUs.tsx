"use client";
import { Inter } from "next/font/google";
import React from "react";
import Button from "./Button";

const inter = inter({weight: "400"})

type Props = {};

const HeroAboutUs = (props: Props) => {
  return (
    <div className="bg-[url('/images/hero2.png')] bg-cover bg-center h-screen w-full justify-center text-white">
      {/* <div className="absolute inset-0 bg-gray/80 z-0"></div> */}
      <div className="flex flex-col items-center text-center justify-center h-full w-full">
        <p className="sm:text-[40px] text-[40px] font-inter-700 text-[#FFFFFF]">
          Our Services
        </p>
        <div className="mt-8 flex w-1/3">
          <Button text="Tech Solution" weight={255} height={52} />
          <Button noBg text="Project Management" weight={255} height={52} />
        </div>
      </div>
    </div>
  );
};

export default HeroAboutUs;
