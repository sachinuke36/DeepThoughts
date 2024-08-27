import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import NoticeBoard from '../noticeBoard/NoticeBoard'
import MainContent from '../MainContent/MainContent'

const MainContainer = () => {
  return (
    <div className='w-[100%] mb-[10px] relative flex justify-between '>
       <Sidebar />
        <MainContent />
       <NoticeBoard />
    </div>
  )
}

export default MainContainer
