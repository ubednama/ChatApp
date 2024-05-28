import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import 'daisyui/dist/full.css';

const Home = () => {
  return (
    <div className='flex h-screen w-screen p-8 justify-center items-center'>
      <div className='flex min-h-[550px] h-[80vh] min-w-[610px] max-w-[1200px] w-[80vw] max-h-[950px] rounded-lg overflow-auto bg-gray-700'>
        <Sidebar />
        <div className='divider lg:divider-horizontal'></div>
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home

