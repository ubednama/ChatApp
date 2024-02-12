import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 bg-gray-800 rounded-lg shadow-md  bg-clip backdrop-filter backdrop-blur-xl  border border-gray-600'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> ChatApp</span>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>username</span>
                        </label>
                        <input type="text" placeholder='username' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                    <label className='label'>
                            <span className='text-base label-text'>password</span>
                        </label>
                        <input 
                            type="password"
                            placeholder='password'
                            className='w-full input input-bordered h-10' />
                    </div>

                    <a href="#" className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </a>

                    <div>
                        <button className='btn btn-sm px-4 mt-2'>Login</button>
                    </div>
                </form>
            </h1>
        </div>
    </div>
  )
}

export default Login









// STARTER CODE
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 bg-gray-800 rounded-lg shadow-md  bg-clip backdrop-filter backdrop-blur-xl  border border-gray-600'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                   Login
//                   <span className='text-blue-500'> ChatApp</span>
//                   <form>
//                       <div>
//                           <label className='label p-2'>
//                               <span className='text-base label-text'>username</span>
//                           </label>
//                           <input type="text" placeholder='username' className='w-full input input-bordered h-10' />
//                       </div>
  
//                       <div>
//                       <label className='label'>
//                               <span className='text-base label-text'>password</span>
//                           </label>
//                           <input 
//                               type="password"
//                               placeholder='password'
//                               className='w-full input input-bordered h-10' />
//                       </div>
  
//                       <a href="#" className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'>
//                           {"Don't"} have an account?
//                       </a>
  
//                       <div>
//                           <button className='btn btn-block btn-sm mt-2'>Login</button>
//                       </div>
//                   </form>
//               </h1>
//           </div>
//       </div>
//     )
//   }