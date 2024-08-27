import React, { useEffect, useState } from 'react'
import Template from '../cards/Template'
import TPM2 from '../cards/TPM2'
import ThreadBuilding from '../cards/ThreadBuilding'
import SYP2 from '../cards/SYP2'
import FourSA from '../cards/4SA2'

const MainContent = () => {
  const [data, setData] = useState(null)
  const API = "https://deepthoughts-3eik.onrender.com/api/deepthought"
  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        console.log(data.tasks[0].assets);
        setData(data);
      })
      .catch((err) => {
        console.error('There was a problem with the fetch operation:', err);
      });
  }, []);

  return (
    <div className='w-[1066px] ml-[187px] flex flex-col gap-4  mt-2 '>
        <div className="flex justify-between">
          <div className="text-[#0029ff] text-[28px] font-bold font-['Poppins'] tracking-wide">Technical Project Management</div>
          <button className="w-[121px] h-9 bg-[#0029ff] rounded-[10px] text-white">Submit task</button>
          </div>
        <div className="w-[1066px] flex flex-col items-center justify-center   mt-[3px] h-[135px] bg-[#e9ecef] rounded-[5px]" >
            <div className='flex flex-col justify-center '>
              <div className="w-[374.05px] text-black text-xl font-bold font-['Poppins'] tracking-tight">Explore the world of management</div>
              <div className="w-[1012px] h-[45px] text-black text-sm font-normal font-['Poppins']  tracking-tight">As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</div>
            </div>
        </div>
        <div className='flex flex-wrap w-[1066px] mt-[30px] gap-5 justify-between'>
              {
                data && data.tasks[0].assets.map((i,k)=>{
                  if(i.asset_id === 18883){
                      return  <Template title={i.asset_title} description={i.asset_description} key={k} component={<TPM2 videoLink={i.asset_content}/>}/>
                  }else if(i.asset_id === 18884){
                      return <Template title={i.asset_title} description={i.asset_description} key={k} component={<ThreadBuilding/>}/>
                  }else if(i.asset_id === 18885){
                    return <Template title={i.asset_title} description={i.asset_description} key={k} component={<SYP2/>}/>
                  }else{
                    return  <Template title={i.asset_title} description={i.asset_description} key={k} component={<FourSA/>}/>
                  }
                })
              }
            </div>
    </div>
  )
}

export default MainContent
