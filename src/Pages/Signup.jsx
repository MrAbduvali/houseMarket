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

const Singup = () => {

  const [password, setPassword] = useState(false)
  const changeIcon = () => {
    setPassword(prev => !prev)
  }

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
          displayName: email,
        });
  
        const formData = { email };
  
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

        {/* <div className='flex flex-col'>
          <p className=''>sign in with</p>

          <div className='flex'>
            <div className=''>
              <svg className='text-[20px]' xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124" fill="none">
                <g clipPath="url(#clip0_1_59)">
                  <path d="M119.081 51.0933L69.0114 51.0909C66.8004 51.0909 65.0083 52.8828 65.0083 55.0938V71.0887C65.0083 73.2992 66.8004 75.0916 69.0112 75.0916H97.2073C94.1198 83.1043 88.3572 89.8147 81.005 94.0785L93.0277 114.891C112.314 103.737 123.716 84.1664 123.716 62.2585C123.716 59.1391 123.486 56.9092 123.026 54.3982C122.677 52.4905 121.02 51.0933 119.081 51.0933Z" fill="#167EE6" />
                  <path d="M62.3391 99.1246C48.5404 99.1246 36.4944 91.5853 30.0247 80.429L9.21289 92.4247C19.8039 110.781 39.6442 123.141 62.3391 123.141C73.4724 123.141 83.9775 120.144 93.0272 114.92V114.891L81.0044 94.0785C75.505 97.2682 69.141 99.1246 62.3391 99.1246Z" fill="#12B347" />
                  <path d="M93.0275 114.919V114.891L81.0047 94.0781C75.5053 97.2675 69.1418 99.1242 62.3394 99.1242V123.141C73.4727 123.141 83.9783 120.143 93.0275 114.919Z" fill="#0F993E" />
                  <path d="M24.9802 61.7646C24.9802 54.9631 26.8363 48.5999 30.0253 43.1007L9.21345 31.105C3.96074 40.1262 0.963379 50.6028 0.963379 61.7646C0.963379 72.9265 3.96074 83.4031 9.21345 92.4242L30.0253 80.4285C26.8363 74.9294 24.9802 68.5661 24.9802 61.7646Z" fill="#FFD500" />
                  <path d="M62.3391 24.4057C71.3372 24.4057 79.6023 27.603 86.0581 32.9214C87.6508 34.2334 89.9656 34.1387 91.4244 32.6798L102.757 21.3467C104.413 19.6915 104.295 16.9821 102.527 15.4482C91.7102 6.06454 77.6368 0.388916 62.3391 0.388916C39.6442 0.388916 19.8039 12.7498 9.21289 31.1056L30.0247 43.1013C36.4944 31.9449 48.5404 24.4057 62.3391 24.4057Z" fill="#FF4B26" />
                  <path d="M86.0584 32.9214C87.6511 34.2334 89.9661 34.1387 91.4248 32.6798L102.758 21.3467C104.413 19.6915 104.295 16.9821 102.527 15.4482C91.7106 6.0643 77.6372 0.388916 62.3394 0.388916V24.4057C71.3372 24.4057 79.6026 27.603 86.0584 32.9214Z" fill="#D93F21" />
                </g>
                <defs>
                  <clipPath id="clip0_1_59">
                    <rect width="122.752" height="122.752" fill="white" transform="translate(0.963379 0.388794)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className=''>
              <svg className='text-[20px]' xmlns="http://www.w3.org/2000/svg" width="123" height="124" viewBox="0 0 123 124" fill="none">
                <g clipPath="url(#clip0_1_68)">
                  <path d="M84.4388 0.388916C77.8946 0.841563 70.2457 5.03047 65.7883 10.4852C61.7221 15.4337 58.3771 22.7834 59.6814 29.9261C66.8316 30.1485 74.2198 25.8599 78.5007 20.3131C82.5055 15.1498 85.5359 7.84608 84.4388 0.388916Z" fill="black" />
                  <path d="M110.301 41.5718C104.018 33.6927 95.1871 29.1202 86.8477 29.1202C75.8384 29.1202 71.1815 34.3908 63.5325 34.3908C55.6457 34.3908 49.6539 29.1355 40.133 29.1355C30.7808 29.1355 20.8226 34.8512 14.5085 44.6253C5.63205 58.3888 7.1511 84.2664 21.5361 106.308C26.684 114.195 33.5581 123.064 42.5496 123.14C50.5515 123.217 52.8071 118.008 63.6476 117.954C74.4881 117.893 76.5442 123.209 84.5307 123.125C93.53 123.056 100.78 113.228 105.928 105.341C109.618 99.6871 110.991 96.8408 113.853 90.4577C93.039 82.5325 89.7017 52.934 110.301 41.5718Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1_68">
                    <rect width="122.752" height="122.752" fill="white" transform="translate(0.0517578 0.388794)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className=''>
              <svg className='text-[20px]' xmlns="http://www.w3.org/2000/svg" width="128" height="129" viewBox="0 0 128 129" fill="none">
                <g clipPath="url(#clip0_1_77)">
                  <path d="M73.9483 128.051V69.8229H93.4854L96.4165 47.1234H73.9483V32.6331C73.9483 26.0631 75.7652 21.5858 85.1972 21.5858L97.2073 21.5808V1.27764C95.1303 1.00773 88.0008 0.388916 79.7028 0.388916C62.3752 0.388916 50.5124 10.9655 50.5124 30.385V47.1234H30.916V69.8229H50.5124V128.051H73.9483Z" fill="#3D4DA6" />
                </g>
                <defs>
                  <clipPath id="clip0_1_77">
                    <rect width="127.663" height="127.663" fill="white" transform="translate(0.230469 0.388794)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Singup