// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginSection from './Pages/login';
import TeamAccount from './Pages/TeamAccount';
import Games from './Pages/Games';
import GameDetails from './Pages/GameDetails';
import TeamRanking from './Components/TeamRanking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSection />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/team" element={<TeamAccount />} />
        <Route path="/games" element={<Games />} />
        <Route path='/gameDetails' element={<GameDetails/>}    />
        <Route path='/TeamRanking' element={<TeamRanking/>}    />
        
      </Routes>
    </Router>
  );
}

export default App;
