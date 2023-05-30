import React from 'react';
import useGame from './useGame';

function Game() {
  const {
    word,
    guesses,
    guessLetter,
    remainingGuesses,
    hangmanImg,
    currentGuess,
    setCurrentGuess,
    gameOver,
    win,
    startNewGame,
    wins,
    losses,
    calculateWinRate,
  } = useGame();

  return (
    <div>
      <h1>Game Screen</h1>
      <img src={hangmanImg} alt="Hangman" />
      <p>
        Word to guess: 
        {gameOver ? word : word.split('').map((letter) => (guesses.includes(letter) ? letter : '_')).join(' ')}
      </p>
      <p>Used letters: {guesses.join(', ')}</p>
      <p>Remaining guesses: {remainingGuesses}</p>
      <p>Win Rate: {calculateWinRate()}%</p>
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
        maxLength={1}
      />
      <button onClick={guessLetter}>Guess Letter</button>
      {gameOver && (win ? <p>You win!</p> : <p>You lose!</p>)}
      {gameOver && <button onClick={startNewGame}>Start New Game</button>}
    </div>
  );
}

export default Game;
