import React, { useState } from "react";
import styled from "styled-components";
import ArrowImg from "../assets/arrows.png";

const CardRules = styled.div`
  //   width: 500px;
  //   height: 300px;
  width: 578px;
  height: 386px;
  border-radius: 5px;
  background-color: #131d20;
`;

const FlexButton = styled.div`
  display: flex;
  justify-content: end;
  padding: 1em 1em;
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: #334237;
  font-family: Montserrat;
  font-size: 24px;
`;

const CloseButton = styled.div`
  align-self: center;
`;
const RulesHeader = styled.div`
  color: #6c954c;
  text-align: center;
  font-family: Abel;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
`;

const RulesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0 2.7em 0;
  //   border: solid red;
`;

const Rules = styled.div`
  max-width: 440px;
  //   border: blue solid;
  font-family: Abel;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  color: #f9d584;
  margin-left: 1.4em;
`;

const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: center;
  //   margin-top: 2em;
`;

const Arrows = styled.img`
  width: 200px;
  object-fit: cover;
`;

const GameRules = () => {
  const [hide, setHide] = useState(true);
  const closeButton = () => {
    setHide(false);
  };

  return (
    <>
      {hide && (
        <CardRules>
          <FlexButton>
            <CloseWrapper>
              <CloseButton onClick={closeButton}>X</CloseButton>
            </CloseWrapper>
          </FlexButton>
          <RulesHeader>Spelregler</RulesHeader>
          <RulesWrapper>
            <Rules>
              Spelat på en 15x15-rutnätsplan tar två spelare turvis att placera
              sina stenar med målet att bilda en obruten rad av fem, antingen
              horisontellt, vertikalt eller diagonalt.{" "}
            </Rules>
          </RulesWrapper>
          <ArrowsWrapper>
            <Arrows src={ArrowImg} />
          </ArrowsWrapper>
        </CardRules>
      )}
    </>
  );
};

export default GameRules;
