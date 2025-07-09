import { useState } from 'react';
const Authentication = () => {
  const [userSignWith, SetUserSignWith] = useState(true);

  const handelSignWith = (e) => {
    e.preventDefault();

    SetUserSignWith((userSignWith) => !userSignWith);
  };
  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      {/* Logo */}
      <img
        className="absolute top-5 left-5 z-50 w-40 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {/*  bg img */}
      <img
        className="absolute   h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg"
        alt="bg img"
      />

      {/* form handling /validation */}
      <div className="relative  bg-black opacity-85  p-5 rounded w-1/3 h-full text-white ">
        <h1 className=" p-3  ">Sign In</h1>
        {userSignWith ? (
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 "
            type="email"
            placeholder="email"
          />
        ) : (
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 "
            type="text"
            placeholder="email or Phone Number"
          />
        )}
        {userSignWith && (
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 "
            type="password"
            placeholder="password"
          />
        )}
        {userSignWith ? (
          <button className="cursor-pointer bg-red-600 flex justify-center w-full p-2 mb-4">
            Sign In
          </button>
        ) : (
          <button  type="buttton" className="cursor-pointer bg-red-600 flex justify-center w-full p-2 mb-4">
            Sign with Code{' '}
          </button>
        )}
        <p className="flex justify-center p-2">or</p>
        <button
          onClick={handelSignWith}
          type='button'
          className="cursor-pointer  bg-gray-500  flex justify-center w-full p-2 mb-4"
        >
          Use a Sign-in-code{' '}
        </button>
        <button className="cursor-pointer p-2 flex justify-center w-full cursor-pointer">
          Forgot Password?
        </button>
        <input className="m-2" type="checkbox" />
        <label>Remember me </label>
        <button className="p-2 cursor-pointer">New to Netflix?Sign up now.</button>
      </div>
    </div>
  );
};          
export default Authentication;
