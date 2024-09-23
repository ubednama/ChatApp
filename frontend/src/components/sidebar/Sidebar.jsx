import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useGetConversations from '../../hooks/useGetConversations';
import { useCallback, useState } from 'react';

const Sidebar = () => {
  const [globalSearch, setGlobalSearch] = useState([]);
  const [search, setSearch] = useState(false);
  const { loading, conversations } = useGetConversations();
  const [chats, setChats] = useState(conversations);

  const handleSearch = useCallback(
    (query, globalSearch, chats) => {
      setGlobalSearch(query ? globalSearch : []);
      setChats(query ? chats : conversations);
      setSearch(query ? true : false);
    },
    [conversations]
  );

  return (
    <div className="w-80 flex flex-col border-r border-gray-200">
      <div className="p-4">
        <SearchInput onSearch={handleSearch} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Conversations
          chats={chats}
          globalSearch={globalSearch}
          search={search}
        />
      </div>
      {loading && (
        <div className="flex justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      )}
      <div className="p-4 border-t border-gray-600">
        <LogoutButton />
      </div>
    </div>
  );
}

export default Sidebar




// Started code for SIDEBAR
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border border-emerald-300 rounded-lg border-r-slate-500 p-4 flex flex-col'>
//         <SearchInput />
//         <div className='divider px-3'></div>
//         <Conversations />
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar