import React from "react";
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
  /* margin-top: 50px; */
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
  margin-right: 20px; /* space mellan spelarnamn och spelarbild */
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

const GomokuSide = () => {
  return (
    <SideContainer>
      <PlayerBox>
        <PlayerInfo>
          <PlayerImage src={whitePiece} alt="Spelare 1" />
          <PlayerName>Spelare 1:</PlayerName>
        </PlayerInfo>
        <PlayerTimer>00:00</PlayerTimer>
      </PlayerBox>
      <LineSeparator />
      <PlayerBox>
        <PlayerInfo>
          <PlayerImage src={blackPiece} alt="Spelare 2" />
          <PlayerNamePlayer2>Spelare 2:</PlayerNamePlayer2>
        </PlayerInfo>
        <PlayerTimer>00:00</PlayerTimer>
      </PlayerBox>
    </SideContainer>
  );
};

export default GomokuSide;





