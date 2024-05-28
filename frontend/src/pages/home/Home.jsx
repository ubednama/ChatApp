import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import 'daisyui/dist/full.css';

const Home = () => {


  return (
    <div className="flex h-screen w-screen sm:p-8 justify-center items-center">
      <div className="flex h-full w-full sm:min-h-[550px] sm:h-[80vh] sm:min-w-[700px] sm:max-w-[1300px] sm:w-[80vw] sm:max-h-[950px] rounded-lg overflow-auto bg-gray-700">
        <Sidebar className="flex-none" />
        <div className="sm:divider divider-horizontal !w-[1px] !m-0 !p-0"></div>
        <MessageContainer className="flex-grow" />
      </div>
    </div>
  );
}

export default Home