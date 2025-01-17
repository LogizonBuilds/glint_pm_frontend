"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "500" });

const Hero = () => {
  return (
    <div className="h-[100vh] w-full border">
      <div
        style={{
          backgroundImage: "url('bgimg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          className={`${inter.className} leading-snug text-gray-50 font-semibold text-5xl w-2/3 text-center`}
        >
          {" "}
          Achieve goals faster with the perfect blend of Tech and Management.
        </h1>
        <div className="w-36 h-11 bg-[#FF0000] rounded-xl flex justify-center cursor-pointer items-center">
          <p className="text-gray-50 font-bold">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
