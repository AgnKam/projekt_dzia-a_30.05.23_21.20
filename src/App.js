import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Thanks from './Thanks.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projekt_froncik" element={<Home />} />
        <Route path="/projekt_froncik/game" element={<Game />} />
        <Route path="/projekt_froncik/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
