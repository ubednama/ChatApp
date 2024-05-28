import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import {useState} from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import useSignup from '../../hooks/useSignup';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  const {loading, signup} = useSignup();

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs)
    //signup user here
  }

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password");
  };

  const isFormComplete = () => {
    const { fullName, username, password, confirmPassword, gender } = inputs;
    return (
      fullName &&
      username &&
      password &&
      confirmPassword &&
      gender &&
      password === confirmPassword
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip border border-gray-600">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
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
              <span className="text-base label-text">Password</span>
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

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <div className="flex justify-end items-center">
              <input
                type={`${confirmPasswordType}`}
                placeholder="Confirm password"
                className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
              <span
                className="absolute flex items-center pr-3 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordType === "password" ? (
                  <FaEye />
                ) : (
                  <FaEyeSlash />
                )}
              </span>
            </div>
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            className="flex align-center justify-center text-sm hover:underline hover:text-blue-400 mt-2 "
            to="/login"
          >
            Already have an account
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading || !isFormComplete()}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp









// Starter Code for SIGN UP COMPONENT

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip border border-gray-600'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder='password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder='Confirm password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <GenderCheckbox />

//           <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href="#">Already have an account</a>

//           <div>
//           <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp