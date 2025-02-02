import React from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

const Appointment = () => {
  return (
    <div className="mt-16">
      <div className="sm:h-[30vh] h-[40vh]  bg-[#FF0000] rounded-lg w-[90%] sm:w-[75%] mx-auto mb-28 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/12 flex justify-center items-center">
          <div className="w-[50px] h-[50px] sm:mt-0 mt-6 rounded-[25px] bg-gray-50 flex justify-center items-center">
            <FaWhatsapp size={30} color="#1FAF38" />
          </div>
        </div>
        <div className="w-full sm:w-3/12 flex flex-col justify-center items-center  p-4">
          <p className="text-left text-gray-50">Get a free Consultation</p>
          <p className="text-left text-[#F5F7FA] font-bold text-[16px] sm:text-[20px]">
            +234 8142679648
          </p>
        </div>
        <div className="w-full sm:w-4/12 flex justify-center items-center p-4">
          <p className="text-gray-50 font-medium text-[14px] sm:text-[15px] text-center">
            Lorem ipsum dolor sit amet consectetur. Integer egestas congue eu vel sollicitudin ipsum sed.
          </p>
        </div>
        <div className="w-full sm:w-4/12 flex justify-center items-center p-4">
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
