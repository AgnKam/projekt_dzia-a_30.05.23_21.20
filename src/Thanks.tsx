import React from 'react';
import './Thanks.css';

const Thanks: React.FC = () => {
  return (
    <div className="thanks-container">
      <h1 className="thanks-title">Appreciation</h1>
      <p className="thanks-content">
        I would like to express my gratitude for having the opportunity to work on this project.
        The journey was as thrilling and filled with suspense as a horror movie.
      </p>
      <p className="thanks-content">
        Special thanks to my lecturer, Mateusz Miotk, for his invaluable insights and guidance throughout the project.
        His expertise was the guiding light in the dark corridors of code.
      </p>
      <p className="thanks-content">
        And of course, a huge shout out to myself, for diving deep into the code, wrestling with bugs and finding my way through.
        This project is a testament to my effort and dedication.
      </p>
    </div>
  );
}

export default Thanks;
