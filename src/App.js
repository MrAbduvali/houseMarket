import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Map from './Pages/Map'
import Chat from './Pages/Chat'
import Profile from './Pages/Profile'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/map' element={<Map />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
