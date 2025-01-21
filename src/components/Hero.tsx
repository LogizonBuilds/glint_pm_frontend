"use client";

import React from "react";
import Button from "./Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/images/hero_bg.png')] bg-cover bg-center h-screen w-full justify-center text-white">
      {/* <div className="absolute inset-0 bg-gray/80 z-0"></div> */}
      <div className="flex flex-col items-center text-center justify-center h-full w-full">
        <p className="sm:text-[55px] text-[45px] font-inter-700">
          Achieve goals faster with the <br />
          perfect blend of{" "}
          <strong className="text-primary">
            Tech and <br />
            Management.
          </strong>
        </p>
        <div className="mt-8">
          <Button text="Contact Us" weight={255} height={52} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
