import React from 'react'

const TPM2 = ({videoLink}) => {
  return (
    <div className='flex flex-col w-[480px] justify-center items-center'>
         <div className='w-full'>
      <iframe
        width="100%"
        height="315"
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
        
      </div>
  )
}

export default TPM2
