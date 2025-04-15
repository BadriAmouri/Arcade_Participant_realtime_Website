// src/components/LoginSection.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
const LoginSection = () => {
  const navigate = useNavigate();
  return (
    <div className="Login  flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold font-cyber text-gray-800 mb-2">
        WELCOME TO
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold font-cyber text-gray-800 mb-6">
        ARCADE'S COMMUNITY
      </h2>
      <p className="text-gray-600 mb-2 text-sm font-Ocr">login and join us in</p>
      <p className="mb-6 text-lg tracking-widest text-gray-500">...............</p>

      <form className="w-full max-w-sm space-y-4">
        <div className="text-left">
          <label className="block text-sm text-gray-600 mb-1 font-Ocr">Team name</label>
          <input
            type="text"
            placeholder="Enter your Team name"
            className="w-full px-4 py-2 border border-gray-400 rounded-sm border-dashed focus:outline-none focus:ring-2 focus:ring-orange-500 font-Ocr"
          />
        </div>
        <div className="text-left">
          <label className="block text-sm text-gray-600 mb-1 font-Ocr">Team password</label>
          <input
            type="password"
            placeholder="Enter your Team password"
            className="w-full px-4 py-2 border border-gray-400 border-dashed  bg-white rounded-sm font-Ocr "
          />
        </div>
        <button
          type="submit" className='btn  font-Ocr' onClick={() => navigate('/team')} >
          See more
        </button>
      </form>
    </div>
  );
};

export default LoginSection;
