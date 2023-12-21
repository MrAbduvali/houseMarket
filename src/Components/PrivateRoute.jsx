import { useAuthHook } from "../hook/UseAuthHook"
import {Outlet, Navigate} from 'react-router-dom'
import a from '../img/loading.gif'
const PrivateRoute = () => {
  const {logedIn, checkingStatus} = useAuthHook()
  if(checkingStatus){
    return <img src={a} alt="loading gif"/>
  }
  return logedIn ? <Outlet /> : <Navigate to="/signin"/>
}

export default PrivateRoute