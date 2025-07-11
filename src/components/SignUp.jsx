import React from 'react'
import { Link} from "react-router-dom";
const SignUp = () => {
  const handelForm = (e) => {
    e.preventDefault(); 
  }
  return (
    <>
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg')] bg-cover bg-center  min-h-screen">
       
           
            <Link className='bg-red-600 p-2 m-2 font-bold text-white rounded-sm' to='/Authentication'> Sign in</Link>
          
        <div className='flex items-center justify-center h-full'>
          
        <form className='bg-black opacity-80 w-1/4 p-5 rounded-sm   ' onSubmit={handelForm}>
       <input className='bg-gray-300 border-2  m-2 p-1 w-full' type='email' placeholder='email' />
            <input className='bg-gray-300 border-2 m-2 p-1 w-full' type='tel' placeholder='phone number' />
            <input className='bg-gray-300 border-2 m-2 p-1 w-full' type='text' placeholder='user name' />
            <input className='bg-gray-300 border-2 m-2 p-1 w-full' type='password' placeholder='confirm -password' />
            <input className='bg-gray-300 border-2 m-2 p-1 w-full' type='password' placeholder='confirm -password' />
            <button className='bg-blue-700 rounded-sm p-1 m-2 font-bold   text-amber-100 ' type='submit'>submit</button>
        </form>
       </div>
     
 
        
      </div>
      </>
  )
}

export default SignUp;

