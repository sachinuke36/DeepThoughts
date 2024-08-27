import React from "react";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";

const QuickLinks = () => {
  const quick = [
    {
      icon: <FaQuestion />,
    },
    {
      icon: <MdOutlineMeetingRoom />,
    },
    {
      icon: <GrSchedulePlay />,
    },
  ];
  return (
    <div className="fixed  flex flex-col gap-5 right-2 bottom-7">
      {quick.map((i, k) => (
        <div key={k} className="flex flex-col">
          <div className="w-[85px] flex justify-center items-center text-white text-[37px] h-[85px] bg-[#0029ff] rounded-full">
            {i.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
