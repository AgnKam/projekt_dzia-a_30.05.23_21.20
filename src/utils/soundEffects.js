import keySound from '../sounds/click.wav'; // Ścieżka do dźwięku stukania klawiszy
import winSound from '../sounds/applause.mp3'; // Ścieżka do dźwięku wygranej
import loseSound from '../sounds/scream.mp3'; // Ścieżka do dźwięku przegranej

export const playKeySound = () => {
  const audio = new Audio(keySound);
  audio.play();
};

export const playWinSound = () => {
  const audio = new Audio(winSound);
  audio.play();
};

export const playLoseSound = () => {
  const audio = new Audio(loseSound);
  audio.play();
};
