import React from "react";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

const Navbar = () => {
  return (
    <div>
      <div className="w-[1440px] h-[90px]  bg-[#f0f0f0] shadow">
        <div className=" px-[84px]  w-[100%] h-[100%]  items-center flex justify-between">
          <img src="./images/logo.png" className=" w-[311px] h-[49px]" alt="" />
          <div className="flex  w-[225px] justify-around">
            <div className="w-[30px] flex justify-center items-center h-[32.37px] bg-[#3683f0] rounded-full">
              <FaHome className=" text-white" />
            </div>

            <div className="w-[30px] flex justify-center items-center h-[32.37px] bg-[#3683f0] rounded-full">
              <FaTools className=" text-white" />
            </div>
            <div className="w-[30px] flex justify-center items-center h-[32.37px] bg-[#3683f0] rounded-full">
              <IoIosNotifications className=" text-white" />
            </div>
            <div className="w-[30px] flex justify-center items-center h-[32.37px] bg-[#eff0f1] rounded-full">
              <img className="rounded-full" src="./images/profile_pic.png" alt="" />
            </div>
            <div className="w-[30px] flex justify-center items-center h-[32.37px] bg-[#3683f0] rounded-full">
              <SlOptionsVertical className=" text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
