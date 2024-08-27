import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { MdLightbulb,  MdMessage } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiThreeLeaves } from "react-icons/gi";

const ThreadBuilding = () => {
    const heading = [{title:'Sub thread 1'}, {title:'Sub Interpretation 1'}]
    const options = [
        {heading:'Select category', options:['option1','option2','option3']},
        {heading:'Select Select Process', options:['option1','option2','option3']}
    ]
    const [expanded, setExpanded] = useState(false);
  return (
    <div  className='flex flex-col gap-5'>
         <div onClick={()=>setExpanded(prev=>!prev)} className="w-[478px] flex gap-5 items-center px-[10px] h-10 bg-[#fdffc0]/20 border border-black/40" >
             <FaAngleUp />
            <div className="w-[95.62px] text-black text-xl font-bold font-['Open Sans']">Thread A</div>
      </div>

       {
        expanded && <div className='flex justify-center gap-5 mt-[3px]'>
        {
            heading.map((i,k)=>(
                <div key={k} className='w-[199px] h-[95px] flex flex-col justify-end opacity-50 bg-black/5 rounded-[10px] shadow border border-[#333333]'>
            <div className="text-black px-4 text-xs font-normal font-['Open Sans']">{i.title}</div>
            <div className="w-[199px] h-[70px] relative bg-[#f9f9f9] rounded-[10px]">
              <input type='text' placeholder='Enter Text here' className="w-[199px] outline-none px-2 text-xs h-[70px] left-0 top-0 absolute opacity-50 bg-white rounded-[10px] shadow border border-[#333333]" />
            </div>
            </div>
            ))
        } 
       </div>

       }

       <div className='flex gap-7 justify-evenly items-center'>
          <div className='flex text-3xl justify-evenly gap-3 '>
           <MdLightbulb />
           <MdMessage />
           <RiQuestionnaireFill/>
           <GiThreeLeaves />
          </div>

          <div className='flex gap-4'>
            {
                options.map((i,k)=>(
                <select key={k} className="w-[91px]  text-black h-8 text-[10px] font-semibold font-['Poppins'] bg-white rounded-[5px] shadow" name="" id="">
                <option value="">{i.heading}</option>
                 {
                    i.options.map((j,l)=>(<option key={j} value={j}>{j}</option>
                    ))
                 }
            </select>
                ))
            }
            
       </div>
      </div>
      
       <div className='flex justify-start w-full pl-[40px]'>
        <div className="w-[97px] flex items-center justify-evenly h-9 bg-[#0029ff] rounded-[10px]" >
          <div className="w-[8.82px] text-white text-xl font-normal font-['Roboto']">+</div>
          <div className="w-[60px] h-[12.60px] text-white text-xs font-medium font-['Roboto']">Sub-thread</div>
        </div>
       </div>


       <div  className='w-[425px] h-[105px] flex flex-col justify-end opacity-50 bg-black/5 rounded-[10px] shadow border border-[#333333]'>
            <div className="text-black px-4 text-xs font-normal font-['Open Sans']">Summary for Thread A</div>
            <div className="w-[425px] h-[70px] relative bg-[#f9f9f9] rounded-[10px]">
              <input type='text' placeholder='Enter Text here' className="w-[425px] outline-none px-2 text-xs h-[70px] left-0 top-0 absolute opacity-50 bg-white rounded-[10px] shadow border border-[#333333]" />
            </div>
            </div>
       
    </div>
  )
}

export default ThreadBuilding
