import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import { playDarkSound, stopDarkSound } from './utils/soundEffects';

function Home() {
  const navigate = useNavigate();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const startGame = () => {
    stopDarkSound(); // Wyłącz odtwarzanie muzyki dark.mp3
    navigate('/projekt_froncik/game');
  };

  useEffect(() => {
    if (isMusicPlaying) {
      playDarkSound(); // Odtwórz muzykę dark.mp3
    } else {
      stopDarkSound(); // Zatrzymaj odtwarzanie muzyki dark.mp3
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying(prevState => !prevState); // Odwróć stan odtwarzania muzyki
  };

  const navigateToThanks = () => {
    navigate('/projekt_froncik/thanks');
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
        <button className="home-music-button" onClick={toggleMusic}>
          <span role="img" aria-label="Music">🎵</span> {isMusicPlaying ? 'Stop Music' : 'Play Music'}
        </button>
        <button className="home-music-button" onClick={navigateToThanks}>💜 Thanks</button>
      </div>
    </div>
  );
}

export default Home;
