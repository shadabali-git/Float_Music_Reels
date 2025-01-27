import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage:React.FC = () => { 
    const navigate = useNavigate();

    return (
        <>
     <img className="w-64 h-64 sm:w-96 sm:h-96 transition duration-300 animate-bounce" src="https://i.ibb.co/c2rDMg0/Whats-App-Image-2024-07-16-at-7-10-17-PM-removebg-preview.png" alt="mai" />
      <div className='flex flex-col gap-4 justify-center' >
      <div className='text-black inline text-5xl sm:text-8xl font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-sky-500  to-green-600'>Float </div>
   
      <div className='text-sm sm:text-3xl font-poppins font-extrabold text-white text-center'> Elevate Your Music Experience </div>
         <button onClick={()=>navigate('/dashboard')} className={`bg-white text-xs px-1 py-2 max-w-20 sm:text-lg sm:px-3 sm:py-2.5 rounded-lg font-bold text-black sm:max-w-32`}>Let's Start</button>
      </div>
    
          </>
        
    )
}

export default LandingPage;