import React from "react";
import Cards from "./Cards";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "500" });

const WhatWeDo = () => {
  const data = [
    {
      img: "woman.png",
      heading: "Transforming Ideas into Action",
      details:
        "We combine cutting-edge technology with proven project management strategies to help you achieve your goals effortlessly.",
    },
    {
      img: "hero_bg.png",
      heading: "Innovating the Future of Project Management",
      details:
        "We combine cutting-edge technology with proven project management strategies to help you achieve your goals effortlessly.",
    },
    {
      img: "hero_bg.png",
      heading: "Empowering teams to achieve more",
      details:
        "We combine cutting-edge technology with proven project management strategies to help you achieve your goals effortlessly.",
    },
  ];

  return (
    <div className="h-[100vh] w-full flex flex-col">
      <div className="h-1/6 flex justify-center items-center">
        <h1 className="font-inter-800 font-extrabold text-5xl">What We Do</h1>
      </div>
      <div className="w-full h-5/6 flex justify-around">
        {data.map((items, index) => (
          <Cards
            key={index}
            heading={items.heading}
            details={items.details}
            img={items.img}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;