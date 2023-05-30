import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import EndScreen from './EndScreen';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<EndScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;