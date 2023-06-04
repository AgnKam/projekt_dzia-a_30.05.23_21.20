import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Hangman Game</h1>
        <p className="home-description">
          In the darkness, a mysterious game awaits. Will you uncover the hidden words or face the consequences?
        </p>
        <button className="home-button" onClick={startGame}>Start Game</button>
        <div className="home-hangman-description">
          <h2>How to play:</h2>
          <p>Guess the letters to reveal the hidden word. Be careful, every wrong guess brings you closer to doom.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
