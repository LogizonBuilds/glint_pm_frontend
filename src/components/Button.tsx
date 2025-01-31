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
  weight?: number;
  text: string;
  noBg?: boolean;
  borderColor?: string;
  textColor?: string;
  icon?: boolean;
};

const IconWrapper: React.FC<iconProps> = ({ Icon, size, color }) => {
  return <Icon size={size} color={color} />;
};

const Button = ({
  weight,
  height,
  text,
  noBg,
  borderColor,
  textColor,
  icon,
}: Props) => {
  return (
    <button
      style={{
        width: weight ? `${weight}px` : "158px",
        height: height ? `${height}px` : "42px",
        borderColor: borderColor ? borderColor : "",
        borderWidth: borderColor ? 1 : 0,
      }}
      onClick={() => console.log("Button clicked")} // will add functionality later
      className={
        noBg
          ? `rounded-md flex cursor-pointer justify-around items-center`
          : `bg-primary rounded-md flex justify-around cursor-pointer items-center`
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
