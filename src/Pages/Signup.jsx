import React, { useState } from 'react';
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { db } from '../firebase';
import OnAuth from '../Components/OnAuth';
const Singup = () => {

  const [password, setPassword] = useState(false)
  const changeIcon = () => {
    setPassword(prev => !prev)
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [requirepass, setRequirepass] = useState("")
  const auth = getAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if(pass === requirepass){
      try {
        const userscredential = await createUserWithEmailAndPassword(auth, email, pass)
  
        const user = userscredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
  
        const formData = { email, name };
  
        formData.Timestamp = serverTimestamp();
  
        await setDoc(doc(db, "users", user.uid), formData)
  
        navigate("/profile");

        toast.success('succesfull')
      } catch (error) {
        toast.error('something went wrong')
      }
    } else {
      toast.error('password is not similar')
    }

  }



  return (
    <div className='bg-main-bg'>
      <div className='container-main z:pt-[50px] flex flex-col z:gap-y-[30px]'>

        <h1 className='text-title z:text-[40px] z:font-[800] z:w-[70%]'>Create an account</h1>

        <form onSubmit={submit} className="flex flex-col items-center z:pt-[20px] z:gap-y-[20px]">
        <div className='flex items-center z:gap-x-[10px] bg-white z:p-[15px] rounded-[15px] shadow-input w-full'>
            <BsFillPersonFill className='text-[20px] text-icon' />
            <input
              type="text"
              className='outline-0 text-[18px] w-full'
              placeholder='UserName'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>

          <div className='flex items-center z:gap-x-[10px] bg-white z:p-[15px] rounded-[15px] shadow-input w-full'>
            <BsFillPersonFill className='text-[20px] text-icon' />
            <input
              type="email"
              className='outline-0 text-[18px] w-full'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>

          <div className='flex items-center z:gap-x-[10px] bg-white z:p-[15px] rounded-[15px] shadow-input w-full'>
            <FaLock className='text-[20px] text-icon' />
            <input
              type={`${password ? "text" : "password"}`}
              className='outline-0 text-[18px] w-full'
              placeholder='Password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            {password ? <IoEye className='text-[20px] text-icon' onClick={changeIcon} /> : <IoMdEyeOff className='text-[20px] text-icon' onClick={changeIcon} />}
          </div>

          <div className='flex items-center z:gap-x-[10px] bg-white z:p-[15px] rounded-[15px] shadow-input w-full'>
            <FaLock className='text-[20px] text-icon' />
            <input
              type={`${password ? "text" : "password"}`}
              className='outline-0 text-[18px] w-full'
              placeholder='Confirm your password'
              value={requirepass}
              onChange={(e) => setRequirepass(e.target.value)}
              required
            />
            {password ? <IoEye className='text-[20px] text-icon' onClick={changeIcon} /> : <IoMdEyeOff className='text-[20px] text-icon' onClick={changeIcon} />}
          </div>

          <div className='flex justify-between items-center w-full mt-[50px]'>
            <h2 className='text-[25px] font-[600]'>Register</h2>
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

export default Singup