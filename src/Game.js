import React, { useCallback } from 'react';
import useGame from './useGame';
import { useFormik } from 'formik';
import './css/Game.css';

function Game() {
  const {
    changeDifficulty,
    changeLanguage,
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
    addUserWord,
    showTranslation,
    setShowTranslation,
    translation,
  } = useGame();

  const formik = useFormik({
    initialValues: {
      newWord: '',
      newWordDifficulty: 'easy',
      newWordLanguage: 'english',
    },
    onSubmit: values => {
      addUserWord(values.newWord, values.newWordDifficulty, values.newWordLanguage);
      formik.resetForm();
    },
  });
//dodany został handleGuessLetter z użyciem hooka useCallback, który obsługuje kliknięcie przycisku "Guess Letter"
  const handleGuessLetter = useCallback(() => {
    guessLetter();
  }, [guessLetter]);

  return (
    <div className="game-container">
      <div className="game-content">
        <div className="hangman-container">
          <img src={hangmanImg} alt="Hangman" className="hangman-image" />
        </div>
        <div className="game-details">
          <h1 className="game-title">Hangman game</h1>
          <div className="difficulty-buttons">
            <button onClick={() => changeDifficulty('easy')}>Easy</button>
            <button onClick={() => changeDifficulty('medium')}>Medium</button>
            <button onClick={() => changeDifficulty('hard')}>Hard</button>
          </div>
          <div className="translation-button">
            <button onClick={() => setShowTranslation(true)}>Show Translation</button>
            {showTranslation && <p className="translation">Translation: {translation}</p>}
          </div>
          <div className="language-buttons">
            <button onClick={() => changeLanguage('english')}>English</button>
            <button onClick={() => changeLanguage('polish')}>Polish</button>
          </div>
          <p className="word-to-guess">
            Word to guess:
            {gameOver ? word : word.split('').map((letter) => (guesses.includes(letter) ? letter : '_')).join(' ')}
          </p>
          <p className="used-letters">Used letters: {guesses.join(', ')}</p>
          <p className="remaining-guesses">Remaining guesses: {remainingGuesses}</p>
          <p className="win-rate">Win Rate: {calculateWinRate()}%</p>
          <p className="wins">Wins: {wins}</p>
          <p className="losses">Losses: {losses}</p>
          <div className="guess-input">
            <input
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
              maxLength={1}
            />
            <button onClick={handleGuessLetter} disabled={gameOver}>
              Guess Letter
            </button>
          </div>
          {gameOver && (
            <div className="game-result">
              {win ? <p className="you-win">You win!</p> : <p className="you-lose">You lose!</p>}
              <button onClick={startNewGame}>Start New Game</button>
            </div>
          )}
        </div>
        <div className="add-word-form">
          <form onSubmit={formik.handleSubmit}>
            <input
              id="newWord"
              name="newWord"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.newWord}
              placeholder="Add a new word"
            />
            <select
              id="newWordDifficulty"
              name="newWordDifficulty"
              onChange={formik.handleChange}
              value={formik.values.newWordDifficulty}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <select
              id="newWordLanguage"
              name="newWordLanguage"
              onChange={formik.handleChange}
              value={formik.values.newWordLanguage}
            >
              <option value="english">English</option>
              <option value="polish">Polish</option>
            </select>
            <button type="submit">Add word</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Game;
