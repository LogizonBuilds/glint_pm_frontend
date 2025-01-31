import React from "react";
import Image from "next/image";
import Button from "./Button";

const ServicesBody = () => {
  return (
    <div className="h-[160vh] p-14 border w-full">
      <h1 className="font-medium text-3xl">
        We are <span className="text-red-600 font-bold">Dedicated</span> to{" "}
        <br /> serve you all time
      </h1>
      <div className="h-3/4 w-full flex justify-around mt-10 flex-wrap">
        <div className="group h-72 w-[31%] flex flex-col border rounded-md bg-[#F5F7FA] p-4">
          <div className="h-[30%] flex justify-center">
            <Image
              className="rounded-lg"
              src={"/images/it.png"}
              alt="it"
              width={80}
              height={80}
            />
          </div>
          <div className="h-[60%] ">
            <h1 className="text-center m-4 font-semibold text-[20px]">
              IT Infrastructure Management
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu
              vel sollicitudin ipsum sed.{" "}
            </p>
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
        <div className="h-72 w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-72 w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-72 w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-72 w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-72 w-[31%] border rounded-md bg-[#F5F7FA]"></div>
      </div>
    </div>
  );
};

export default ServicesBody;
