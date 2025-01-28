import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  heading: string;
  details: string;
  img: string;
};

const Cards = (props: Props) => {
  return (
    <div className="w-1/4 ">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-72 border"
      ></div>
      <div className="w-[90%] m-auto h-64 relative bottom-20 bg-slate-50 pt-4 rounded">
        <div className="h-[20%] px-6">
          <h1 className="text-xl text-center text-[#717171]">
            Transforming Ideas into Action
          </h1>
        </div>
        <div className="h-[60%] px-4 py-6">
          <p className="text-center text-sm text-[#717171]">
            We combine cutting-edge technology with proven project management
            strategies to help you achieve your goals effortlessly.{" "}
          </p>
        </div>
        <div className="h-[20%] flex justify-center">
          <p className="text-center font-bold text-[#FF0000]">Explore</p>
          <FaLongArrowAltRight
            color="#FF0000"
            style={{ top: 4, position: "relative", left: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
