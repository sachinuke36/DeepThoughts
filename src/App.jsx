import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import NoticeBoard from './components/noticeBoard/NoticeBoard'
import MainContainer from './components/mainContainer/MainContainer'
import QuickLinks from './components/Quick/QuickLinks'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainContainer />
      <QuickLinks/>
      
    </div>
  )
}

export default App
