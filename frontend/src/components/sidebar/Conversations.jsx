import Conversation from './Conversation'
import { getRandomEmoji } from '../../utils/emoji';
import { sortChats } from '../../utils/sortChats';

const Conversations = ({ chats , globalSearch, search }) => {
  
  chats = sortChats(chats);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {search && globalSearch.length > 0 && (
        <>
          Global Search
          <div className="divider my-0 py-0 h-1" />
        </>
      )}
      {search &&
        globalSearch.length > 0 &&
        globalSearch.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={false}
            lastIdx={idx === chats.length - 1}
          />
        ))}
      {search && chats.length > 0 && (
        <>
          Chats
          <div className="divider my-0 py-0 h-1" />
        </>
      )}
      {chats.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === chats.length - 1}
          message={conversation.lastMessage}
          messageTimeStamp = {conversation.lastMessageTimeStamp}
        />
      ))}
    </div>
  );
};

export default Conversations

/**
 * 
  createdAt: "2024-02-07T08:41:57.482Z";
  fullName: "Jack John";
  gender: "male";
  lastMessage: null;
  profilePic: "https://avatar.iran.liara.run/public/boy?username=jackjohn";
  updatedAt: "2024-05-27T22:43:32.911Z";
  username: "jackjohn";
  __v: 0;
  _id: "65c34255ea6ff73ca0bfd03f";
*/

/**
 * createdAt
: 
"2024-02-07T08:41:57.482Z"
fullName
: 
"Jack John"
gender
: 
"male"
profilePic
: 
"https://avatar.iran.liara.run/public/boy?username=jackjohn"
updatedAt
: 
"2024-02-07T08:41:57.482Z"
username
: 
"jackjohn"
__v
: 
0
_id
: 
"65c34255ea6ff73ca0bfd03f"
 */

// STARTER CODE FOR CONVERSATIONS
// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default Conversations