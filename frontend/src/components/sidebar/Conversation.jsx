import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { formatTime } from "../../utils/extractTIme";

const Conversation = ({
  conversation,
  lastIdx,
  emoji,
  message,
  messageTimeStamp,
}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  messageTimeStamp = formatTime(messageTimeStamp);

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-700" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-10 rounded-full">
            <img src={conversation?.profilePic} alt="user" />
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden w-full">
          <div className="flex gap-3 justify-between w-full">
            <div className="w-full">
              <div className="flex justify-between w-full ">
                <div className="font-bold text-gray-200">
                  {conversation?.fullName}
                </div>
                <span className="text-lg">{emoji}</span>
              </div>
              <div className="w-full flex justify-between items-center gap-1 overflow-hidden">
                <div className="text-sm flex-shrink overflow-hidden whitespace-nowrap truncate">
                  {message}
                </div>
                <div className="text-xs whitespace-nowrap w-fit">
                  {messageTimeStamp}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// Started code for CONVERSATION
// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//         <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//             {/* avatar */}
//             <div className='avatar online'>
//                 {/* later we will make above online offline dynamic */}
//                 <div className='w-12 rounded-full'>
//                     <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user" />
//                     {/* later we will change URL */}
//                 </div>

//             </div>
//             {/* name and icon */}
//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-bold text-gray-200'>John Doe</p>
//                     <span className='text-xl'>👻</span>
//                 </div>
//             </div>
//         </div>
//         <div className='divider my-0 py-0 h-1' />
//     </>
//   )
// }

// export default Conversation
