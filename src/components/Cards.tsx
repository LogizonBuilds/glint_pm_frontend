import React from "react";

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
        }}
        className="w-full h-72 border"
      ></div>
      <div className="w-5/6 m-auto h-72 relative bottom-20 border"></div>
    </div>
  );
};

export default Cards;