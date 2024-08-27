import React from 'react'

const Template = ({component, title, description}) => {
  return (
    <div className='flex flex-wrap'>
    <div className="w-[480px] flex flex-col items-center h-[580px] bg-[#fcfcfc] rounded-[15px] shadow" >
    <div className="w-[480px] h-[50px] bg-black rounded-tl-[15px] flex justify-around items-center rounded-tr-[15px]" >
    <div className="text-white text-base font-semibold font-['Open Sans'] tracking-tight">{title}</div>
    <div className="w-[22px] h-[22px] bg-white rounded-full text-center" >i
      </div>
    </div>
    <div className="w-[453px] h-[83px] pt-2">
      <span className={"text-black text-base font-semibold font-['Open Sans'] tracking-tight"}>Description</span>
      <span className="text-black text-[15px] font-semibold font-['Poppins'] tracking-tight">:</span>
      <span className="text-black text-sm font-semibold font-['Poppins'] tracking-tight"> </span>
      <span className="text-black text-sm font-normal font-['Open Sans'] tracking-tight">{description}</span>
    </div>
    <div className='flex flex-col items-center justify-center'>

      {/* content */}
      {component}

    </div>
      </div>
  </div>
  )
}

export default Template
