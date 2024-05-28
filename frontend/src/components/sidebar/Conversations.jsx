import Conversation from './Conversation'
import { getRandomEmoji } from '../../utils/emoji';

const Conversations = ({ chats , globalSearch, search }) => {

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
        />
      ))}
    </div>
  );
};

export default Conversations



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