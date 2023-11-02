import React, { useState } from "react";
import styled from 'styled-components'
import Board from './Board'

function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  return (
    <div>
      <GameButton>
      <h2>Different Games</h2>
      <button onClick={() => handleGameSelect("empty")}>Empty Game</button>
      <button onClick={() => handleGameSelect("full")}>Full Game</button>
      <button onClick={() => handleGameSelect("white")}>White Win</button>
      <button onClick={() => handleGameSelect("black")}>Black Win</button>
      </GameButton>

      {selectedGame && <Board selectedGame={selectedGame} />}
    </div>
  );
}

export default Games;

const GameButton = styled.div`
    padding: .5rem;
    margin: 3rem;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 20px;

    button {
        padding: 1rem;
        margin: 3rem;
        background-color: #000;
        color: #fff;
        border-radius: 20px;
        border: 2px solid #fff;
    }
`
