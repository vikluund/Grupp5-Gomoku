import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7rem;
  margin: 0;
  padding: 0;
  gap: 17vw;
  color: #debd76;
`;
const NavContainer = styled.div`
  align-self: end;
  /* margin-left: 17.7em; */
`;
const NavLogga = styled.div`
  font-size: 3.8vw;
  font-family: "gang_of_three";
`;

const NavLoggaEnd = styled.span`
  font-size: 2.8vw;
  font-family: "gang_of_three";
  color: #4c954f;
`;

const RulesButton = styled.button`
  width: 9vw;
  height: 5vh;
  background: #35533d;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 1vw;
  color: #debd76;
  border: solid #35533d;
  border-radius: 3px;
  cursor: pointer;
`;

const RulesFlex = styled.div`
  padding: 2rem 6rem 0 0;
  position: absolute;
  left: 20%;
`;

const RulesCard = styled.div`
  width: 600px;
  height: 600px;
  border: solid #debd76 2px;
  background-color: white;
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
          <RulesCard></RulesCard>
        </RulesFlex>
      )}
    </>
  );
};

export default Navbar;
