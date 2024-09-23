import { useEffect } from 'react'
// import { GiHamburgerMenu } from "react-icons/gi";
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // const deletedMessage = await Message.findByIdAndDelete(messageId);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col w-full h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex bg-slate-600 px-4 py-2 mb-2 items-center gap-2">
            {/* <GiHamburgerMenu /> */}
            <img src={selectedConversation.profilePic} className="h-8" />
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer


const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="flex bg-slate-600 px-4 py-2 mb-2 items-center gap-2">
        {/* <GiHamburgerMenu /> */}
        <img
          src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/external-chat-interface-kiranshastry-lineal-color-kiranshastry-1.png"
          alt="logo"
          className="h-8"
        />
        <span className="text-gray-900 font-bold">ChatApp</span>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg ms:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p>{`Welcome 👋 ${authUser.fullName} 😎`}</p>
          <p>Select a chat to start messaging</p>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      </div>
    </>
  );
};




// Starter CODE
// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from 'react-icons/ti';

// const MessageContainer = () => {
//   const noChatSelected = true;
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       {noChatSelected ? (
//         <NoChatSelected/>) : (
//           <>
//         <div className='bg-slate-500 px-4 py-2 mb-2'>
//           <span >John Doe</span>
//         </div>
//         <Messages />
//         <MessageInput />
//       </>
//       )};
//     </div>
//   )
// }

// export default MessageContainer


// const NoChatSelected = () => {
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg ms:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋 John Doe 😎</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-center" />
//       </div>

//     </div>
//   )
// }