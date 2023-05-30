import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div>
      <h1>Welcome to Hangman Game</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default Home;
