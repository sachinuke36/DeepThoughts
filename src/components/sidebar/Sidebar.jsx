import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const isExpanded1 = expanded
    ? "w-[392px] h-[692px]"
    : " w-[132px] h-[692px] ";
  const isExpanded2 = expanded
    ? "w-[392px] h-[50px]"
    : " w-[132px] h-[50px] justify-end ";
  return (
    <div className="absolute left-0 z-10">
      <div
        className={` ${isExpanded2} flex items-center  px-[10px] bg-black rounded-tr-[22px]`}
      >
        {expanded ? (
          <div className="flex justify-between w-[100%]">
            <div className="text-white text-base font-semibold font-['Poppins'] tracking-tight">
              Journey Board
            </div>
            <FaRegArrowAltCircleLeft
              className="text-white w-[39px] h-[29px]"
              onClick={() => setExpanded((prev) => !prev)}
            />
          </div>
        ) : (
          <FaRegArrowAltCircleRight
            className="text-white w-[39px] h-[29px]"
            onClick={() => setExpanded((prev) => !prev)}
          />
        )}
      </div>
      <div
        className={`${isExpanded1} w-[132px] h-[692px] bg-[#fcfcfc] rounded-bl-[20px] rounded-br-[20px] shadow`}
      >
        {
            expanded ? <div className="flex flex-col py-[21px]  items-center">
                <ul className="text-black  w-[309px]  text-base font-semibold font-['Poppins'] tracking-tight list-disc"><li>Explore the world of management</li></ul>
                <div className="w-[309px] h-[110px] text-black text-base font-normal font-['Poppins'] tracking-tight">  
                    <ul className="list-disc	">
                        <li>Technical Project Management</li>
                        <li>Threadbuild</li>
                        <li>Structure your pointers</li>
                        <li>4SA Method</li>
                    </ul>
                        
                            </div>
            </div> : <div className="py-[26px] px-[32px]">
            <div className="w-[68px] h-[68px] rounded-[20px] border border-[#0029ff]" >
            <div className="text-[#0029ff] h-[68px] flex justify-center items-center text-4xl font-normal font-['Poppins'] tracking-wide">1</div>
                </div>

            </div>
        }
        
      </div>
    </div>
  );
};

export default Sidebar;
