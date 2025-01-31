import React from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

const Appointment = () => {
  return (
    <div className="relative bottom-20">
      <div className="h-[30vh] bg-[#FF0000] rounded-lg w-[75%] mx-auto mb-28 flex">
        <div className="w-1/12 flex justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-[25px] bg-gray-50 flex justify-center items-center">
            <FaWhatsapp size={30} color="#1FAF38" />
          </div>
        </div>
        <div className="w-3/12 flex flex-col justify-center">
          <p className="text-left text-gray-50">Get a free Consultation</p>
          <p className="text-left text-[#F5F7FA] font-bold text-[20px]">
            +234 8142679648
          </p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <p className="text-gray-50 font-medium text-[15px]">
            Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu
            vel sollicitudin ipsum sed.{" "}
          </p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <Button
            bg="#FFFFFF"
            text="Make Appointment"
            height={50}
            weight={254}
            textColor="#000000"
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
