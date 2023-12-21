import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const OnAuth = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)

            if (!docSnap.exists()) {
                await setDoc(doc(db, "users", user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timeStamp: serverTimestamp()
                })
            }

            navigate("/")
        } catch (error) {
            alert("hato")
            console.log(error);
        }
    }



    return (
        <div className='flex flex-col items-center gap-y-[20px]'>
            <p>Sign {location.pathname === "/signup" ? "up" : "in"} With</p>
            <div className='flex items-center gap-x-[30px]'>
                <button onClick={onGoogleClick} className='bg-white rounded-[50%] p-[6px]'><FcGoogle fontSize={"40px"} /></button>
                <button onClick={onGoogleClick} className='bg-white rounded-[50%] p-[11px]'><FaApple fontSize={"30px"} /></button>
                <button onClick={onGoogleClick} className='bg-white rounded-[50%] p-[11px]'><FaFacebookF fontSize={"30px"} /></button>
            </div>
        </div>
    )
}

export default OnAuth