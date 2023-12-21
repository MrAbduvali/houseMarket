import {useState} from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { doc, updateDoc  } from 'firebase/firestore'
import { db } from '../firebase'
import a from '../img/hello.jpg'
const Profile = () => {

const auth = getAuth()

const [disabled, setDisabled] = useState(true)
const [data, setData] = useState({
  name: auth.currentUser.displayName,
  email: auth.currentUser.email,
})

const handleChange = async (e) => {
  e.preventDefault();

  try {
    if(auth.currentUser.displayName !== data.name){
      await updateProfile(auth.currentUser,{
        displayName: data.name
      })
      const useRef = doc(db, "users", auth.currentUser.uid)
      await updateDoc(useRef, {
        name: data.name
      })
    }
  } catch (error) {
    alert("hato")
    console.log(error);
  }

  setDisabled(prev => !prev)
}
  return (
    <div className='container-main pt-[50px] '>
      <form className='flex flex-col items-start w-full gap-y-[20px]'>
        <h1 className='text-[40px] font-[700]'>My profile</h1>
        <div className='flex justify-between w-full items-center'>
          <p className='z:text-[18px]'>Personal details</p>
          <button type='submit' onClick={handleChange} className='p-[10px] bg-lime text-white rounded-[15px]'>{disabled ? "Change" :"Done"}</button>
        </div>
        <div className='flex flex-col items-center bg-white w-full py-[20px] rounded-[20px]'>
          <img src={a} alt="" width={"180px"} className='border-gray border-[1px] rounded-[50%] p-[10px]'/>
          <div className='flex flex-col z:gap-y-[15px]'>
            <input 
            type="text" 
            className='text-[20px] bg-transparent text-title'
            value={data.name}
            onChange={(e) => setData({...data.name}, e.target.value)}
            disabled={disabled}
            />
            <input 
            type="email" 
            className='text-[20px] bg-transparent text-gray'
            value={data.email}
            onChange={(e) => setData(e.target.value)}
            disabled={disabled}
            />
            <textarea cols="20" rows="5" className='border-[1px] border-gray p-[10px] rounded-[15px]'>Bio</textarea>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Profile