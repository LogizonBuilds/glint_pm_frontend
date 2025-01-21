"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Button from "./Button";

const inter = Inter({ weight: "400" });

const Headers = () => {
  const [activePage, setActivePage] = useState("Home");
  const pageList = ["Home", "About Us", "Services", "Blogs", "Portfolio"];
  return (
    <div className="h-[15vh] w-full flex flex-row border items-center">
      <div className="w-[20%] flex justify-end">
        <Image
          aria-hidden
          src="/Glintpm.png"
          alt="Globe icon"
          width={80}
          height={80}
        />
      </div>
      <div className="w-[60%] flex justify-center ">
        <div className="w-3/5 flex justify-between ">
          {pageList.map((items, index) => (
            <Link
              key={index}
              onClick={() => setActivePage(items)}
              className={
                activePage === items
                  ? "font-bold text-primary"
                  : inter.className
              }
              href={""}
            >
              {items}
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="W-[20%]"> */}
      <Button text="Login" height={42} weight={158} />
      {/* </div> */}
    </div>
  );
};

export default Headers;
