import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [inputs, setInputs] = useState({
      username: "daisydoe",
      password: "Daisydoe@8",
    });

    const [passwordType, setPasswordType] = useState("password");

    const {loading, login} = useLogin()
    const handleSubmit = async(e) => {
        e.preventDefault();
        await login(inputs.username, inputs.password)
    }

    const togglePasswordVisibility = () => {
      setPasswordType(passwordType === "password" ? "text" : "password");
    };

    const isFormComplete = () => {
      const { username, password } = inputs;
      return (
        username &&
        password
      );
    };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-800 rounded-lg shadow-md  bg-clip backdrop-filter backdrop-blur-xl  border border-gray-600">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">password</span>
            </label>
            <div className="flex justify-end items-center">
              <input
                type={`${passwordType}`}
                placeholder="password"
                className="w-full input input-bordered h-10"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
              <span
                className="absolute flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div className="flex justify-center">
            <button
              className="btn btn-sm px-4 mt-2"
              disabled={loading || !isFormComplete()}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
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