import React from 'react'
import { MdOutlineTurnLeft, MdOutlineTurnRight } from "react-icons/md";
import { BsArrowsFullscreen, BsThreeDots } from "react-icons/bs";

const SYP2 = () => {
  return (
    <div>
      <div className="flex  mt-4 flex-col gap-5 w-[479px] h-[399px] bg-[#fcfcfc] border-t-0 rounded-bl-[15px] rounded-br-[15px] ">
          <div className="flex flex-col gap-3 items-center">
            <label
              htmlFor="title"
              className="text-start w-full px-6 "            >
              Title
            </label>
            <input
              type="text"
              className="w-[422px] h-[43px] bg-[#fbfbfb] rounded-[5px] shadow"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <label htmlFor="content" className="text-start w-full px-6 ">
              Content
            </label>
            <div className="w-[422px] flex flex-start h-[224px] bg-[#fbfbfb] shadow">
              <div className="w-[422px] h-[82px] bg-[#fbfbfb] rounded-tl-[5px] rounded-tr-[5px] shadow">
                <div className="flex pt-2 ">
                  <ul className="flex w-full justify-evenly text-[#606060] text-xs font-normal font-['Poppins'] tracking-tight">
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Insert</li>
                    <li>Format</li>
                    <li>Tools</li>
                    <li>Table</li>
                    <li>Help</li>
                  </ul>
                </div>
                <div className="flex items-center w-[234px] mt-4 justify-evenly ">
                  <MdOutlineTurnLeft className="text-[21px]" />
                  <MdOutlineTurnRight className="text-[21px]" />
                  <BsArrowsFullscreen />
                  <div className="w-[102px] h-[18px] flex justify-center items-center bg-[#ebebeb]">
                    Paragraph
                  </div>
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SYP2
