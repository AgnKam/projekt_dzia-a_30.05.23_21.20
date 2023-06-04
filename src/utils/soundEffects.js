import keySound from '../sounds/click.wav'; // Ścieżka do dźwięku stukania klawiszy
import winSound from '../sounds/applause.mp3'; // Ścieżka do dźwięku wygranej
import loseSound from '../sounds/scream.mp3'; // Ścieżka do dźwięku przegranej
import darkSoundFile from '../sounds/dark.mp3'; // Ścieżka do dźwięku w lesie

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

let darkSound = null;

export const playDarkSound = () => {
  if (!darkSound) {
    darkSound = new Audio(darkSoundFile);
    darkSound.loop = true;
  }
  darkSound.play();
};

export const stopDarkSound = () => {
  if (darkSound) {
    darkSound.pause();
    darkSound.currentTime = 0;
  }
};
