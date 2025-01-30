import React from "react";

const ServicesBody = () => {
  return (
    <div className="h-[120vh] p-14 border w-full">
      <h1 className="font-medium text-3xl">
        We are <span className="text-red-600 font-bold">Dedicated</span> to{" "}
        <br /> serve you all time
      </h1>
      <div className="h-3/4 w-full flex justify-between mt-10 flex-wrap">
        <div className="h-[46%] w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-[46%] w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-[46%] w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-[46%] w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-[46%] w-[31%] border rounded-md bg-[#F5F7FA]"></div>
        <div className="h-[46%] w-[31%] border rounded-md bg-[#F5F7FA]"></div>
      </div>
    </div>
  );
};

export default ServicesBody;
