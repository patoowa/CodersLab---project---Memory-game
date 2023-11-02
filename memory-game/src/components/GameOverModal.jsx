import React from 'react';

const GameOverModal = ({ onClose }) => {
    return (
      <div className="game-over-modal">
        <div className="game-over-content">
          <h2>Game Over</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default GameOverModal;