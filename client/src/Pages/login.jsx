import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSection = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsRes = await fetch('https://arcade-backend-ckdw.vercel.app/api/teams');
        const teamsData = await teamsRes.json();
        setTeams(teamsData);
      } catch (err) {
        console.error('Error fetching Teams:', err);
      }
    };

    fetchData();
  }, []);


  // Dynamic password mapping  "TeamName" : "Password"
  const gamePasswordMap = {
    'Extraterrestres': '1',
    'The spark': '2',
    'Error 404': '3',
    'SOPAPA': '4',
    'Team Cheese': '5',
    'Area_51': '6',
    'واه نيشان': '7',
    'Aliens': '8',
    'Ganadores': '9',
    'نادي مطوري غوغل': '10',
    'Dingy Wingy': '11',
    'GameOn': '12',
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Get selected team details
    const selectedTeam = teams.find((team) => team.name === name);
  
    if (!selectedTeam) {
      alert("Team not found.");
      return;
    }
  
  
    const expectedPassword = gamePasswordMap[name];
    console.log("the password is", expectedPassword);
  
    if (!expectedPassword) {
      alert(`No password set for Team ${name}.`);
      return;
    }
  
    if (password !== expectedPassword) {
      alert("Incorrect password for this game.");
      return;
    }
  
    try {
      const response = await fetch('https://arcade-backend-ckdw.vercel.app/api/teams/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, Password: password }),
      });
  
      const text = await response.text();
      if (!response.ok) {
        throw new Error(JSON.parse(text).error || 'Login failed');
      }
  
      const data = JSON.parse(text);
      console.log('Login success:', data);
      navigate('/team', { state: { teamName: name } });
      localStorage.setItem('teamName', name);
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
         
           <select
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-sm border-dashed focus:outline-none focus:ring-2 focus:ring-orange-500 font-Ocr"
            required
          >
            <option value="" disabled>Select a team</option>
            {teams.map((team) => (
              <option key={team.id} value={team.name}>{team.name}</option>
            ))}
          </select>
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