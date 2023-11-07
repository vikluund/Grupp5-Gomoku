import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GameOver = ({ winner }) => {
  return (
    <GameOverContainer>
      <p>Player {winner} wins!</p>
    </GameOverContainer>
  );
};

GameOver.propTypes = {
  winner: PropTypes.number.isRequired,
};

const GameOverContainer = styled.div``;

export default GameOver;
