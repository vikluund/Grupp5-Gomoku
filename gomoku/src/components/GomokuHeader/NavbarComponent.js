import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  background-color: #1f3438;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  color: #debd76;
`;
const NavContainer = styled.div`
  align-self: center;
  padding: 10rem 10rem;
`;
const NavLogga = styled.div`
  font-size: 36px;
  font-family: "gang_of_three";
`;

const NavLoggaEnd = styled.span`
  font-size: 36px;
  font-family: "gang_of_three";
  color: #4c954f;
`;

const RulesButton = styled.button`
  width: 129px;
  height: 36px;
  background: #35533d;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  color: #debd76;
  border: solid #35533d;
  border-radius: 3px;
  cursor: pointer;
`;

const RulesFlex = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem 6rem 0 0;
  position: absolute;
  left: 78%;
`;

const RulesCard = styled.div`
  width: 12rem;
  border: solid #debd76 2px;
  padding: 1rem;
  background-color: white;
`;

const RulesHeader = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
const Rules = styled.div`
  margin-top: 0.5em;
`;

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogga>
            GO!<NavLoggaEnd>MOKU</NavLoggaEnd>
          </NavLogga>
        </NavContainer>
        <NavContainer>
          <RulesButton onClick={handleShow}>Spelregler</RulesButton>
        </NavContainer>
      </Nav>
      {show && (
        <RulesFlex>
          <RulesCard>
            <RulesHeader>Regler</RulesHeader>
            <Rules>
              Spelat på en 15x15-rutnätsplan tar två spelare turvis att placera
              sina stenar med målet att bilda en obruten rad av fem, antingen
              horisontellt, vertikalt eller diagonalt.
            </Rules>
          </RulesCard>
        </RulesFlex>
      )}
    </>
  );
};

export default Navbar;
