import React from "react";
import Image from "next/image";

const GrowBusiness = () => {
  const data = [
    {
      image: "/images/happy.png",
      title: "Professional Team",
      content:
        " Lorem ipsum dolor sit amet consectetur. Integer egestas congue euvel sollicitudin ipsum sed.",
    },
    {
      image: "/images/darts.png",
      title: "Target Oriented",
      content:
        " Lorem ipsum dolor sit amet consectetur. Integer egestas congue euvel sollicitudin ipsum sed.",
    },
    {
      image: "/images/rejoice.png",
      title: "Professional Team",
      content:
        " Lorem ipsum dolor sit amet consectetur. Integer egestas congue euvel sollicitudin ipsum sed.",
    },
  ];

  return (
    <div className="mb-12 w-full px-14">
      <h1 className="font-medium text-3xl">
        We help business to <br /> grow faster & bigger
      </h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 pt-10">
        {data.map((items, index) => (
          <div
            style={{
              boxShadow: "0px 2px 2px 2px rgba(114, 108, 108, 0.1)",
            }}
            key={index}
            className="w-full rounded-xl"
          >
            <div className="h-[40%] pt-5 flex justify-center">
              <Image
                src={items.image}
                width={100}
                height={100}
                alt="happy"
                objectFit="cover"
              />
            </div>
            <div className="h-[60%] p-5">
              <h1 className="font-medium text-3xl text-center">
                {items.title}
              </h1>
              <p className="mt-5 text-center"> {items.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowBusiness;
