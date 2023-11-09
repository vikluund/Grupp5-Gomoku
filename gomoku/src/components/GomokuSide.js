import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import blackPiece from "../assets/BlackPiece.png";
import whitePiece from "../assets/WhitePiece.png";

const SideContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black-blue);
  border: 10px black;
  border-radius: 3px;
  padding: 10px;
  width: 200px;
  height: 100px;
`;

const PlayerInfo = styled.div`
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const PlayerName = styled.div`
  color: var(--wood-yellow);
  margin-right: 20px;
`;

const PlayerNamePlayer2 = styled(PlayerName)`
  color: var(--green-light);
`;

const PlayerImage = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-right: 20px;
`;

const PlayerTimer = styled.div`
  font-size: 28px;
  color: var(--wood-yellow);
  font-family: "Montserrat";
  margin-top: 3px;
  margin-left: 40px;
`;

const LineSeparator = styled.div`
  width: 80%;
  height: 2px;
  background-color: var(--wood);
  margin: 20px 20px;
`;

const GomokuSide = ({ currentPlayer, onGameEnd }) => {
  const [player1Timer, setPlayer1Timer] = useState(60);
  const [player2Timer, setPlayer2Timer] = useState(60);

  useEffect(() => {
    // Återställ tiden till 00:00 när det är inte spelarens tur
    if (currentPlayer === 1) {
      setPlayer2Timer(60);
    } else if (currentPlayer === 2) {
      setPlayer1Timer(60);
    }
  }, [currentPlayer]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPlayer === 1 && player1Timer > 0) {
        setPlayer1Timer((prevTime) => prevTime - 1);
      } else if (currentPlayer === 2 && player2Timer > 0) {
        setPlayer2Timer((prevTime) => prevTime - 1);
      } else if (player1Timer === 0) {
        // Spelare 2 vinner
        onGameEnd(2);
      } else if (player2Timer === 0) {
        // Spelare 1 vinner
        onGameEnd(1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentPlayer, player1Timer, player2Timer]);

  return (
    <SideContainer>
      <PlayerBox>
        <PlayerInfo>
          <PlayerImage src={blackPiece} alt="Spelare 1" />
          <PlayerName>Spelare 1:</PlayerName>
        </PlayerInfo>
        <PlayerTimer>
          {`${String(Math.floor(player1Timer / 60)).padStart(2, "0")}:${String(
            player1Timer % 60
          ).padStart(2, "0")}`}
        </PlayerTimer>
      </PlayerBox>
      <LineSeparator />
      <PlayerBox>
        <PlayerInfo>
          <PlayerImage src={whitePiece} alt="Spelare 2" />
          <PlayerNamePlayer2>Spelare 2:</PlayerNamePlayer2>
        </PlayerInfo>
        <PlayerTimer>
          {`${String(Math.floor(player2Timer / 60)).padStart(2, "0")}:${String(
            player2Timer % 60
          ).padStart(2, "0")}`}
        </PlayerTimer>
      </PlayerBox>
    </SideContainer>
  );
};

GomokuSide.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  onGameEnd: PropTypes.func.isRequired,
};

export default GomokuSide;
