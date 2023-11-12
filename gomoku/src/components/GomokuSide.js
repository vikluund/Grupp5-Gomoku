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
  width: 40%;
  height: 2px;
  background-color: var(--wood);
  margin: 20px 20px;
`;

const MessageContainer = styled.div`
margin-bottom: 20px;
`;

const Message = styled.div`
font-size: 18px;
color: #ff0000;
font-family: "Montserrat";
`;


const GomokuSide = ({ activePlayer, switchPlayer }) => {
    const initialTimerValue = 10;
    const [player1Timer, setPlayer1Timer] = useState(initialTimerValue);
    const [player2Timer, setPlayer2Timer] = useState(initialTimerValue);
    const [gameMessage, setGameMessage] = useState("");

    const handleTimerExpiration = () => {
      const winningPlayer = activePlayer === 1 ? 2 : 1;
      const message = `Spelet avslutades. Spelare ${winningPlayer} vinner!`;
      setGameMessage(message);
    };

    useEffect(() => {
      let timerInterval;

      if (player1Timer > 0 && player2Timer > 0) {
        timerInterval = setInterval(() => {
          if (activePlayer === 1) {
            setPlayer1Timer((prevTimer) =>
              prevTimer === 0 ? prevTimer : prevTimer - 1
            );
          } else {
            setPlayer2Timer((prevTimer) =>
              prevTimer === 0 ? prevTimer : prevTimer - 1
            );
          }
        }, 1000);
      } else {
        handleTimerExpiration();
      }

      return () => clearInterval(timerInterval);
    }, [activePlayer, player1Timer, player2Timer]);

    useEffect(() => {
      setPlayer1Timer(initialTimerValue);
      setPlayer2Timer(initialTimerValue);
    }, [activePlayer, switchPlayer]);

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
      const secondsFormatted = (seconds % 60).toString().padStart(2, "0");
      return `${minutes}:${secondsFormatted}`;
    };

    return (
      <SideContainer>
        <MessageContainer>{gameMessage && <Message>{gameMessage}</Message>}</MessageContainer>
        <PlayerBox>
          <PlayerInfo>
            <PlayerImage src={blackPiece} alt="Spelare 1" />
            <PlayerName>Spelare 1:</PlayerName>
          </PlayerInfo>
          <PlayerTimer>{formatTime(player1Timer)}</PlayerTimer>
        </PlayerBox>
        <LineSeparator />
        <PlayerBox>
          <PlayerInfo>
            <PlayerImage src={whitePiece} alt="Spelare 2" />
            <PlayerNamePlayer2>Spelare 2:</PlayerNamePlayer2>
          </PlayerInfo>
          <PlayerTimer>{formatTime(player2Timer)}</PlayerTimer>
        </PlayerBox>
      </SideContainer>
    );
  };

  GomokuSide.propTypes = {
    activePlayer: PropTypes.number.isRequired,
    switchPlayer: PropTypes.func.isRequired,
  };

  export default GomokuSide;
