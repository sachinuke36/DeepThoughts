import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa";

const FourSA = () => {
    const [expanded, setExpanded] = useState([false,false]);
    const card = [
        {
          title: "Introduction ",
          info: "The 4SA Method , How to bring a idea into progress ?",
        },
        {
          title: "Thread A",
          info: "How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?",
        },
      ];

     const handleExpand = (index) =>{
        setExpanded((prev)=>{
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        })
      }
  return (
    <div>
      <div>
          {card.map((i, k) => (
            <div key={k} className="flex flex-col gap-4">
              <div onClick={()=>handleExpand(k)} className="w-[434px] cursor-pointer h-[43px] flex items-center pl-8 gap-5 bg-[#f2f2f2]">
                <FaAngleUp />
                <div className="w-[193px]  text-black text-base font-semibold font-['Open Sans'] tracking-tight">
                  {i.title}{" "}
                </div>
              </div>

            {
                expanded[k] && <div>
                <div className="w-[394px]  ml-3  text-black text-sm font-normal font-['Open Sans'] tracking-tight">
                   {i.info}
                 </div>
                 <div className="w-full flex justify-end">
                   <div className="w-[71px] h-[29px] text-[#5f6060] text-sm font-semibold font-['Open Sans'] tracking-tight">
                     See More
                   </div>
                 </div>
                </div>
   
            }
             
            </div>
          ))}
          <div className="flex flex-col gap-5">
            <div className="w-[394px] h-[43px] flex items-center bg-[#fbfbfb] border border-[#d8d7d7]">
              <div className="w-[193px] pl-5 h-[30px] text-black text-base font-semibold font-['Open Sans'] tracking-tight">
                Example 1
              </div>
            </div>
            <div className="w-[394px] px-3 h-[67px] text-black text-sm font-normal font-['Open Sans'] tracking-tight">
              You have a concept , How will you put into progress?
            </div>
          </div>
        </div>
    </div>
  )
}

export default FourSA
