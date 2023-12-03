import { useAuthHook } from "../hook/UseAuthHook"
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoute = () => {
  const {logedIn, checkingStatus} = useAuthHook()
  if(checkingStatus){
    return <h1 className="text-center font-bold text-black">Loading...</h1>
  }
  return logedIn ? <Outlet /> : <Navigate to="/signin"/>
}

export default PrivateRoute