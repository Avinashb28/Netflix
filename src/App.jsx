 
 
import { Outlet } from 'react-router-dom';
import './App.css'
 import Authentication from './components/Authentication'
import AuthHelp from './components/AuthHelp'
import SignUp from "./components/SignUp";
 


function App() { 
  return (
    <>
   
     {/* <Authentication/>   */}
     {/* <AuthHelp/>   */}
      {/* <SignUp/> */}
      <Outlet/>
    </>
  )
}

export default App
