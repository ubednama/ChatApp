import React, { useState } from 'react'
import {Box, Flex, Text} from '@chakra-ui/react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTIme';
import {BsCheck2All} from "react-icons/bs"

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
  const shakeClass = message.shouldShake ? 'shake' : ''

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt="profile" src={profilePic} />
            </div>
        </div>
        <div className={` max-w-3/4 chat-bubble text-white ${bubbleBgColor} ${shakeClass} `}>
        {/* <p className='overflow-wrap break-words'>{`${message.message}`}</p>
          {chatClassName === 'chat-end' && (
            <div className="flex items-end">
              <BsCheck2All size={16} />
            </div>
          )} */}
            <p className=' overflow-wrap break-words '>{`${message.message}`} {chatClassName === 'chat-end' ? <BsCheck2All size={16} className="absolute right-2 bottom-0.5"/> : ''}</p>
        </div>
        
        <div className='flex chat-footer opacity-50 text-xs gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message





//Starter CODE
// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img alt="profile" src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"} />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>
//             Hii! What's upp
//         </div>
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//     </div>
//   )
// }

// export default Message