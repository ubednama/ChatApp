import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import 'daisyui/dist/full.css';

const Home = () => {
  return (
    <div className='flex h-screen w-screen p-8 justify-center items-center'>
      <div className='flex min-h-[450px] h-[80%] min-w-[610px] max-w-[1200px] w-[80%] max-h-[950px] rounded-lg overflow-auto bg-gray-700'>
        <Sidebar />
        <div className='divider lg:divider-horizontal'></div>
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home

