import React, { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import { playDarkSound, stopDarkSound } from './utils/soundEffects';

// Definicja akcji
const TOGGLE_MUSIC = 'TOGGLE_MUSIC';

// Początkowy stan
const initialState = {
  isMusicPlaying: false
};

// Reduktor
//hook useReducer jest wykorzystywany do zarządzania stanem isMusicPlaying. Reduktor decyduje, jak stan powinien się zmieniać w odpowiedzi na akcje, takie jak TOGGLE_MUSIC, które włącza lub wyłącza odtwarzanie muzyki.
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC:
      return {
        ...state,
        isMusicPlaying: !state.isMusicPlaying
      };
    default:
      return state;
  }
};

function Home() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const startGame = () => {
    stopDarkSound(); // Wyłącz odtwarzanie muzyki dark.mp3
    navigate('/projekt_froncik/game');
  };

  useEffect(() => {
    if (state.isMusicPlaying) {
      playDarkSound(); // Odtwórz muzykę dark.mp3
    } else {
      stopDarkSound(); // Zatrzymaj odtwarzanie muzyki dark.mp3
    }
  }, [state.isMusicPlaying]);

  const toggleMusic = () => {
    dispatch({ type: TOGGLE_MUSIC }); // Wywołaj akcję TOGGLE_MUSIC
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
          <span role="img" aria-label="Music">🎵</span> {state.isMusicPlaying ? 'Stop Music' : 'Play Music'}
        </button>
        <button className="home-music-button" onClick={navigateToThanks}>💜 Thanks</button>
      </div>
    </div>
  );
}

export default Home;
