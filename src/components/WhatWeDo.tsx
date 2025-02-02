import React from "react";
import Cards from "./Cards";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "500" });

const WhatWeDo = () => {
  const data = [
    {
      img: "/images/woman.png",
      heading: "Transforming Ideas into Action",
      details:
        "We combine cutting-edge technology with proven project management strategies to help you achieve your goals effortlessly.",
    },
    {
      img: "/images/laptopTwo.png",
      heading: "Innovating the Future of Project Management",
      details:
        "We combine cutting-edge technology with proven project management strategies to help you achieve your goals effortlessly.",
    },
    {
      img: "/images/laptop.png",
      heading: "Empowering teams to achieve more",
      details:
        "We combine cutting-edge technology with proven project management strategies to help you achieve your goals effortlessly.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="h-1/6 flex p-12 justify-center items-center">
        <h1 className="font-inter-800 font-extrabold text-5xl">What We Do</h1>
      </div>
      <div className="h-5/6 grid grid-cols-1 ps-24 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {data.map((items, index) => (
          <div key={index} className="w-full">
            <Cards
              key={index}
              heading={items.heading}
              details={items.details}
              img={items.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
