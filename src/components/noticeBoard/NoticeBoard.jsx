import React from 'react'
import { RxCross1 } from "react-icons/rx";

const NoticeBoard = () => {
  return (
    <div className=''>
      <div className="mt-[18px]">
      <div className="w-[95px]  h-[394px]  bg-white rounded-tl-[30px] rounded-bl-[30px] shadow" > 
      <div className="w-[50px] h-[394px] origin-top-left p-5 bg-black rounded-tl-[30px] rounded-bl-[30px]" >
      <div className="text-white text-base font-normal font-['Poppins'] tracking-tight">
      <RxCross1 className='text-[20px]'/><br/>
        N<br/>o<br/>t<br/>i<br/>c<br/>e<br/><br/>B<br/>o<br/>a<br/>r<br/>d</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard
