import React, { useState } from 'react'
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import OnAuth from '../Components/OnAuth';
const Signin = () => {

  const [password, setPassword] = useState(false)
  const changeIcon = () => {
    setPassword(prev => !prev)
  }

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const auth = getAuth();
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );

      if (userCredential.user) {
        navigate("/profile");
      }
      toast.success("Succesfuly signed !")
    } catch (error) {
      toast.error("error")
      console.log(error);
    }
  }

  return (
    <div className='bg-main-bg'>
      <div className='container-main z:pt-[50px] flex flex-col z:gap-y-[30px]'>

        <h1 className='text-title z:text-[40px] z:font-[800] z:w-[70%]'>Welcome Back!</h1>

        <form onSubmit={signIn} className="flex flex-col items-center z:pt-[20px] z:gap-y-[20px]">
          <div className='flex items-center z:gap-x-[10px] bg-white z:p-[15px] rounded-[15px] shadow-input w-full'>
            <BsFillPersonFill className='text-[20px] text-icon' />
            <input
              type="email"
              className='outline-0 text-[18px] w-full'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex items-center z:gap-x-[10px] bg-white z:p-[15px] rounded-[15px] shadow-input w-full'>
            <FaLock className='text-[20px] text-icon' />
            <input
              type={`${password ? "text" : "password"}`}
              className='outline-0 text-[18px] w-full'
              placeholder='Password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            {password ? <IoEye className='text-[20px] text-icon' onClick={changeIcon} /> : <IoMdEyeOff className='text-[20px] text-icon' onClick={changeIcon} />}
          </div>

          <Link to="#" className='text-lime text-end z:text-[15px] w-full'>Forgot Password?</Link>

          <div className='flex justify-between items-center w-full mt-[30px]'>
            <h2 className='text-[25px] font-[600]'>Sign In</h2>
            <button type='submit' className='bg-lime text-white p-[15px] rounded-[50%]'>
              <FaArrowRight />
            </button>
          </div>
        </form>

        <OnAuth />

      </div>
    </div>
  )
}

export default Signin