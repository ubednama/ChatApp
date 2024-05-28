import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useGetConversations from '../../hooks/useGetConversations';
import { useCallback, useState } from 'react';

const Sidebar = () => {

  const [globalSearch, setGlobalSearch] = useState([]);
  const [search, setSearch] = useState(false)
  const { loading, conversations } = useGetConversations();
  const [chats, setChats] = useState(conversations);

  const handleSearch = useCallback(
    (query, globalSearch, chats) => {
      setGlobalSearch(query ? globalSearch : []);
      setChats(query ? chats : conversations);
      setSearch(query ? true : false)
    },
    [conversations]
  );

  return (
    <>
      <div className="rounded-lg py-4 p-2 sm:flex flex-col overflow-auto w-[30%] min-w-72 max-w-80">
        <SearchInput onSearch={handleSearch} />
        <div className="divider px-3"></div>
        <Conversations
          chats={chats}
          globalSearch={globalSearch}
          search={search}
        />
        {loading ? (
          <span className="loading loading-spinner mx-auto"></span>
        ) : null}
        <LogoutButton />
      </div>
    </>
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