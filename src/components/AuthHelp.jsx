
import { useState } from 'react';

const AuthHelp = () => {
  const [radiobtnHandel, SetRadiobtnHandel] = useState('email');
  const handelRadiobtn = (e) => {
    SetRadiobtnHandel(e.target.value)
  }
  return (
    <div className='    flex justify-center items-center '>
      <nav className='bg-gray-800 absolute z-30 top-0 w-full flex justify-between items-center px-3'>
        <img className="w-50" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        
         <button className='cursor-pointer bg-red-700   rounded-md    text-white w-15 h-7'>Sign In</button>
      </nav>
      <img className='absolute ' src="https://dnm.nflximg.net/api/v6/aHn-vO8ub4KPvcVsSA3di9cME-o/AAAAAScyGMgUWk6v1RyiD6aiF3q8jELFh0hzbzYEyo0f-s-_TVtoEZRM1L-qGnR_3Oen.jpg" alt="bg img on help page" />
     
      <form className='relative px-6 py-8  top-32 bg-white h-[450px] w-96'>
        <h1 className='text-black text-3xl font-bold'>Update password,  
        </h1>
        <h1 className='text-black text-3xl font-bold'> 
        email or phone
        </h1>
        <p className='py-2'>How would you like to reset your password?</p>
        <div className='p-3'>
        <div >
        <input type="radio" value='email' checked={radiobtnHandel==='email'} onChange={handelRadiobtn} />
        <label >Email</label>
     </div>
     
        <div> 
        <input type="radio" value='phone number' checked={radiobtnHandel==='phone number'} onChange={handelRadiobtn}/>
          <label>phone number</label>
          </div>
        </div>
        {radiobtnHandel==='email'?<p className='p-2'>We will send you an email with instructions on how to reset your password.</p>:<p className='p-2'>We will text you a verification code to reset your password. Message and data rates may apply.</p>}
        {radiobtnHandel==='email'?<input className='bg-gray-200 w-full p-3 my-3 rounded-md border-b-gray-600' type='email' placeholder='email' />:<input className='bg-gray-200 w-full p-3 my-3 rounded-md border-b-gray-600' type='tel' placeholder='phone number' />}
        {radiobtnHandel === 'email' ? <button className='bg-red-500 w-full   text-amber-50 font-bold  p-3 rounded-md'>Email</button> : <button className='bg-red-500 w-full   text-amber-50 font-bold  p-3 rounded-md'>phone number</button>}
      </form>
    </div>
  )
}

export default AuthHelp
