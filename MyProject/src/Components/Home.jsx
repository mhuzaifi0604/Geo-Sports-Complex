import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
    const [check, setcheck] = useState(true);
  return (
    <div className="flex flex-row h-screen w-screen justify-center items-center">
      {/* Caller component for Login Sign Up Page! */}
      <div className="flex flex-col basis-1/2 h-full w-full justify-center items-center bg-[#0d1117] overflow-auto">
              {check ? <Login /> : <SignUp />}
              <div className='flex w-4/5 backdrop-filter backdrop-blur-md rounded-md'>
          <div className='basis-1/2 text-center font-serif text-xl text-black bg-[#486730] shadow-md shadow-green-200 p-1 rounded-lg border-black border-2'>
            {/* Sign In button */}
            <button
              onClick={() => {setcheck(true);}}
              className={`italic w-full h-full bg-[#486730] font-bold ${check ? 'underline' : ''}`}
              
            >
              SignIn
            </button>
          </div>
          <div className='basis-1/2 text-center font-serif text-xl text-black bg-[#486730] shadow-md shadow-green-200 p-1 rounded-lg border-black border-2'>
            {/* Sign Up button */}
            <button
              onClick={() => {setcheck(false);}}
              className={`italic w-full h-full bg-[#486730] font-bold p-1 ${!check ? 'underline' : ''}`}
            >
              SignUp
            </button>
          </div>
        </div>        
      </div>
      <div className="flex basis-1/2 h-full w-full justify-center items-center bg-cover bg-center" style={{
        backgroundImage: "url('https://i.pinimg.com/564x/72/1d/a2/721da2358efdb553f55ba99f34771f58.jpg')",
      }}>
      </div>
    </div>
  );
};
export default Home;
