import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border border-emerald-300 rounded-lg border-r-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
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