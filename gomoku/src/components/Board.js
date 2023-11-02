import React, { useState, useEffect } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/wood.jpg";
import blackPiece from "../assets/BlackPiece.png";
import whitePiece from "../assets/WhitePiece.png";

const Board = () => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/gomoku/create_game"
        );
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchGame();
  }, []);

  const renderBoard = () => {
    if (!gameData) {
      return <div>Loading...</div>;
    }

    const checkWin = (tiles, player) => {
      // Check horizontally
      for (let row = 0; row < tiles.length; row++) {
        for (let col = 0; col <= tiles.length - 5; col++) {
          if (
            tiles[row][col] === player &&
            tiles[row][col + 1] === player &&
            tiles[row][col + 2] === player &&
            tiles[row][col + 3] === player &&
            tiles[row][col + 4] === player
          ) {
            return true;
          }
        }
      }

      // Check vertically
      for (let col = 0; col < tiles.length; col++) {
        for (let row = 0; row <= tiles.length - 5; row++) {
          if (
            tiles[row][col] === player &&
            tiles[row + 1][col] === player &&
            tiles[row + 2][col] === player &&
            tiles[row + 3][col] === player &&
            tiles[row + 4][col] === player
          ) {
            return true;
          }
        }
      }

      // Check diagonally (from top-left to bottom-right)
      for (let row = 0; row <= tiles.length - 5; row++) {
        for (let col = 0; col <= tiles.length - 5; col++) {
          if (
            tiles[row][col] === player &&
            tiles[row + 1][col + 1] === player &&
            tiles[row + 2][col + 2] === player &&
            tiles[row + 3][col + 3] === player &&
            tiles[row + 4][col + 4] === player
          ) {
            return true;
          }
        }
      }

      // Check diagonally (from top-right to bottom-left)
      for (let row = 0; row <= tiles.length - 5; row++) {
        for (let col = 4; col < tiles.length; col++) {
          if (
            tiles[row][col] === player &&
            tiles[row + 1][col - 1] === player &&
            tiles[row + 2][col - 2] === player &&
            tiles[row + 3][col - 3] === player &&
            tiles[row + 4][col - 4] === player
          ) {
            return true;
          }
        }
      }

      return false;
    };

    const cellClick = async (rowIndex, colIndex) => {
      if (
        gameData?.board?.tiles[rowIndex][colIndex] === 0 &&
        gameData.state === "playing"
      ) {
        const currentPlayer = gameData.player;
        const newTiles = gameData.board.tiles.map((row) => [...row]);
        newTiles[rowIndex][colIndex] = currentPlayer;

        try {
          const response = await fetch(
            "http://localhost:3000/api/gomoku/update_game",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                board: {
                  tiles: newTiles,
                },
                player: currentPlayer,
                state: gameData.state,
              }),
            }
          );
          const updatedGameData = await response.json();

          const nextPlayer = currentPlayer === 1 ? 2 : 1;
          setGameData({
            ...updatedGameData,
            player: nextPlayer,
          });
        } catch (error) {
          console.error("Error updating game data:", error);
        }
        if (checkWin(newTiles, currentPlayer)) {
          alert(`Player ${currentPlayer} wins!`);
        }
      }
    };

    return gameData.board.tiles.map((row, rowIndex) => (
      <BoardRow key={rowIndex}>
        {row.map((col, colIndex) => (
          <BoardCellBackground
            key={colIndex}
            onClick={() => cellClick(rowIndex, colIndex)}
          >
            {col === 0 && <EmptyCell></EmptyCell>}
            {col === 1 && <Player1Cell></Player1Cell>}
            {col === 2 && <Player2Cell></Player2Cell>}
          </BoardCellBackground>
        ))}
      </BoardRow>
    ));
  };

  return (
    <BoardContainer>
      <GameName>{gameData?.name}</GameName>
      <CurrentRound>Round: {gameData?.round}</CurrentRound>
      <PlayerContainer>
        <PlayerOne className={gameData?.player === 1 ? "active" : ""}>
          Player 1: {gameData?.player1.name}
        </PlayerOne>
        <PlayerTwo className={gameData?.player === 2 ? "active" : ""}>
          Player 2: {gameData?.player2.name}
        </PlayerTwo>
      </PlayerContainer>
      {renderBoard()}
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  .active {
    font-weight: bold;
    font-size: 1.1rem;
  }
  width: 100%;
`;

const BoardCell = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameName = styled.h1`
  color: #1f3438;
  font-family: "go3v2";
`;

const CurrentRound = styled.p`
  font-size: 1.5rem;
  font-family: "go3v2";
`;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  font-family: "go3v2";
`;

const PlayerOne = styled.p`
  align-self: flex-start;
  margin-right: auto;
  margin-left: 34vw;
`;

const PlayerTwo = styled.p`
  align-self: flex-end;
  margin-left: auto;
  margin-right: 34vw;
`;

const BoardCellBackground = styled(BoardCell)`
  width: 40px;
  height: 40px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const BoardRow = styled.div`
  display: flex;
`;

const EmptyCell = styled(BoardCell)`
  background-color: transparent;
`;

const Player1Cell = styled(BoardCell)`
  background-image: url(${blackPiece});
  background-size: cover;
  background-position: center;
  background-color: transparent;
`;

const Player2Cell = styled(BoardCell)`
  background-image: url(${whitePiece});
  background-size: cover;
  background-position: center;
  background-color: transparent;
`;
