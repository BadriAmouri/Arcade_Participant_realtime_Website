import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSection = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://arcade-backend-ckdw.vercel.app/api/teams/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, Password: password }), // ✅ must match backend expectations
      });

      const text = await response.text();
      console.log('Raw response:', text); // Debug: see what the server returns

      if (!response.ok) {
        throw new Error(JSON.parse(text).error || 'Login failed');
      }

      const data = JSON.parse(text);
      console.log('Login success:', data);
      navigate('/team');
    } catch (err) {
      console.error('Login error:', err.message);
      alert(err.message);
    }
  };

  return (
    <div className="Login flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold font-cyber text-gray-800 mb-2">
        WELCOME TO 
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold font-cyber text-gray-800 mb-6">
        ARCADE'S COMMUNITY
      </h2>
      <p className="text-gray-600 mb-2 text-sm font-Ocr">login and join us in</p>
      <p className="mb-6 text-lg tracking-widest text-gray-500">...............</p>

      <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
        <div className="text-left">
          <label className="block text-sm text-gray-600 mb-1 font-Ocr">Team name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Team name"
            className="w-full px-4 py-2 border border-gray-400 rounded-sm border-dashed focus:outline-none focus:ring-2 focus:ring-orange-500 font-Ocr"
          />
        </div>
        <div className="text-left">
          <label className="block text-sm text-gray-600 mb-1 font-Ocr">Team password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Team password"
            className="w-full px-4 py-2 border border-gray-400 border-dashed bg-white rounded-sm font-Ocr"
          />
        </div>
        <button type="submit" className="btn font-Ocr">
          See more
        </button>
      </form>
    </div>
  );
};

export default LoginSection;