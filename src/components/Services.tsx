import React from "react";
import Image from "next/image";
import Button from "./Button";

const ServicesBody = () => {
  const data = [
    {
      img: "/images/it.png",
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu vel sollicitudin ipsum sed. ",
    },
    {
      img: "/images/it.png",
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu vel sollicitudin ipsum sed. ",
    },
    {
      img: "/images/cybersecurity.jpg",
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu vel sollicitudin ipsum sed. ",
    },
    {
      img: "/images/transfer.png",
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu vel sollicitudin ipsum sed. ",
    },
    {
      img: "/images/data.png",
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu vel sollicitudin ipsum sed. ",
    },
    {
      img: "/images/designers.png",
      title: "Software Development",
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu vel sollicitudin ipsum sed. ",
    },
  ];

  return (
    <div className="h-[175vh] p-14 border w-full">
      <h1 className="font-medium text-3xl">
        We are <span className="text-red-600 font-bold">Dedicated</span> to{" "}
        <br /> serve you all time
      </h1>
      <div className="h-3/4 w-full flex justify-around mt-10 flex-wrap">
        {data.map((items, index) => (
          <div
            key={index}
            className="group h-80 w-[30%] flex flex-col border rounded-md bg-[#F5F7FA] p-4"
          >
            <div className="h-[30%] flex justify-center">
              <Image
                className="rounded-lg"
                src={items.img}
                alt="it"
                width={80}
                height={80}
              />
            </div>
            <div className="h-[60%] ">
              <h1 className="text-center m-4 font-semibold text-[20px]">
                {items.title}
              </h1>
              <p className="text-center">{items.content}</p>
            </div>
            <div className="h-[10%] hidden justify-between group-hover:flex">
              <Button text="More" height={30} weight={102} icon />
              <Button
                text="Purchase"
                noBg
                height={30}
                weight={102}
                borderColor={"#FF0000"}
                textColor={"#FF0000"}
                // icon={FaArrowRightLong}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBody;
