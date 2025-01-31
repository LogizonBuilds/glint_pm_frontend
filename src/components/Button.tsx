"use client";
import React from "react";
import { IconType } from "react-icons/lib";
import { FaArrowRightLong } from "react-icons/fa6";

interface iconProps {
  Icon: IconType;
  size?: number;
  color?: string;
}

type Props = {
  height?: number;
  weight?: number | string;
  text: string;
  noBg?: boolean;
  borderColor?: string;
  textColor?: string;
  icon?: boolean;
  bg?: string;
};

const Button = ({
  weight,
  height,
  text,
  noBg,
  borderColor,
  textColor,
  bg,
  icon,
}: Props) => {
  return (
    <button
      style={{
        backgroundColor: bg ? bg : "",
        width: weight ? `${weight}px` : "158px",
        height: height ? `${height}px` : "42px",
        borderColor: borderColor ? borderColor : "",
        borderWidth: borderColor ? 1 : 0,
      }}
      onClick={() => console.log("Button clicked")} // will add functionality later
      className={
        noBg
          ? `p-4 rounded-md flex cursor-pointer justify-around items-center`
          : `p-4 bg-primary rounded-md flex justify-around cursor-pointer items-center`
      }
    >
      <p
        style={{ color: textColor ? textColor : "#f9fafb" }}
        className="font-bold"
      >
        {text}
      </p>
      {icon && <FaArrowRightLong color={textColor ? textColor : "#f9fafb"} />}
    </button>
  );
};

export default Button;
