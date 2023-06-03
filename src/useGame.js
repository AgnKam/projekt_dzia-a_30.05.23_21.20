import { useState, useEffect } from 'react';
import easy from './data/easy.json';
import medium from './data/medium.json';
import hard from './data/hard.json';

const useGame = () => {
  const difficultyLevels = {
    easy: easy,
    medium: medium,
    hard: hard,
  };

  const [difficulty, setDifficulty] = useState('easy');  // new state variable
  const [words, setWords] = useState(difficultyLevels[difficulty]);
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(6);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const hangmanImg = `/images/hangman${6 - remainingGuesses}.png`;
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const regex = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻa-zA-Z]/;

  useEffect(() => {
    setWords(difficultyLevels[difficulty]);
  }, [difficulty]);

  useEffect(() => {
    startNewGame();  // start a new game whenever the words change
  }, [words]);

  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuesses([]);
    setRemainingGuesses(6);
    setCurrentGuess('');
    setGameOver(false);
    setWin(false);
  };

  useEffect(() => {
    setWords(difficultyLevels[difficulty]);
  }, [difficulty]);

  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const calculateWinRate = () => {
    const totalGames = wins + losses;
    return totalGames > 0 ? (wins / totalGames * 100).toFixed(2) : 0;
  };

  const guessLetter = () => {
    if (word.includes(currentGuess) && !guesses.includes(currentGuess) && currentGuess !== '' && currentGuess.match(regex)) {
      setGuesses((oldGuesses) => [...oldGuesses, currentGuess]);
    } else if (!word.includes(currentGuess) && !guesses.includes(currentGuess) && currentGuess !== '' && currentGuess.match(regex)) {
      setRemainingGuesses((oldGuesses) => oldGuesses - 1);
      setGuesses((oldGuesses) => [...oldGuesses, currentGuess]);
    } else if (!currentGuess.match(regex)) {
      alert('Please enter a letter');
    } else {
      alert('You already guessed that letter!');
    }
    setCurrentGuess('');
  };

  useEffect(() => {
    if (remainingGuesses === 0) {
      setGameOver(true);
      setLosses((oldLosses) => oldLosses + 1);
    }

    if (word.length > 0 && word.split('').every((letter) => guesses.includes(letter))) {
      setGameOver(true);
      setWin(true);
      setWins((oldWins) => oldWins + 1);
    }

  }, [guesses, remainingGuesses]);


  return {
    word,
    guesses,
    guessLetter,
    remainingGuesses,
    hangmanImg,
    currentGuess,  // export the current guess and its setter
    setCurrentGuess,
    gameOver,
    win,
    startNewGame,
    wins,
    losses,
    calculateWinRate,
    changeDifficulty,
  };
};

export default useGame;
