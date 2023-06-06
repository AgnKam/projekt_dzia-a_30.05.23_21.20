import { renderHook, act } from '@testing-library/react';
import useGame from './useGame';

describe('useGame', () => {
  // Testujemy czy po uruchomieniu nowej gry ustawia odpowiednie wartości początkowe.
  it('should start a new game', () => {
    const { result } = renderHook(() => useGame());

    // Symulujemy uruchomienie nowej gry
    act(() => {
      result.current.startNewGame();
    });

    // Oczekujemy, że wylosowano nowe słowo
    expect(result.current.word).toBeTruthy();
    // Oczekujemy, że lista prób jest pusta
    expect(result.current.guesses).toEqual([]);
    // Oczekujemy, że pozostało 6 prób
    expect(result.current.remainingGuesses).toEqual(6);
    // Oczekujemy, że gra nie jest zakończona
    expect(result.current.gameOver).toEqual(false);
    // Oczekujemy, że gracz nie wygrał
    expect(result.current.win).toEqual(false);
  });

  // Testujemy czy zmiana języka działa prawidłowo.
  it('should change language', () => {
    const { result } = renderHook(() => useGame());

    // Symulujemy zmianę języka na 'polish'
    act(() => {
      result.current.changeLanguage('polish');
    });

    // Oczekujemy, że wylosowano nowe słowo po zmianie języka
    expect(result.current.word).toBeTruthy();
  });

  // Testujemy czy zmiana poziomu trudności działa prawidłowo.
  it('should change difficulty', () => {
    const { result } = renderHook(() => useGame());

    // Symulujemy zmianę poziomu trudności na 'medium'
    act(() => {
      result.current.changeDifficulty('medium');
    });

    // Oczekujemy, że wylosowano nowe słowo po zmianie poziomu trudności
    expect(result.current.word).toBeTruthy();
  });

  // Testujemy czy zgadywanie litery działa prawidłowo.
  it('should guess letter', () => {
    const { result } = renderHook(() => useGame());

    // Symulujemy wpisanie litery 'a'
    act(() => {
      result.current.setCurrentGuess('a');
    });

    // Symulujemy zgadnięcie litery
    act(() => {
      result.current.guessLetter();
    });

    // Oczekujemy, że lista prób zawiera literę 'a'
    expect(result.current.guesses).toEqual(['a']);
  });

});
