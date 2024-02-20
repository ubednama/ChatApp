import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-700": "" }`}
          onClick={() => setSelectedConversation(conversation)}>
            {/* avatar */}
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                {/* later we will make above online offline dynamic */}
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic}
                    // "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" 
                    alt="user" />
                    {/* later we will change URL */}
                </div>

            </div>
            {/* name and icon */}
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <div>
                      <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                      {/* <p className='text-sm'>newMessage</p> */}
                    </div>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>
        {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default Conversation




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