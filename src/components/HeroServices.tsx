"use client";
import React, { useState } from "react";
import Button from "./Button";

const HeroServices = () => {
  const [val, setValue] = useState(1);
  return (
    <div className="bg-[url('/images/hero2.png')] bg-cover bg-center h-screen w-full justify-center text-white">
      {/* <div className="absolute inset-0 bg-gray/80 z-0"></div> */}
      <div className="flex flex-col items-center text-center justify-center h-full w-full">
        <p className="sm:text-[40px] text-[40px] font-inter-700 text-[#FFFFFF]">
          Our Services
        </p>
        <div className="mt-8 flex w-1/3">
          <Button
            text="Tech Solution"
            onClick={() => setValue(1)}
            weight={255}
            height={52}
            noBg={val === 1 ? false : true}
          />
          <Button
            onClick={() => setValue(2)}
            text="Project Management"
            weight={255}
            height={52}
            noBg={val === 2 ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
