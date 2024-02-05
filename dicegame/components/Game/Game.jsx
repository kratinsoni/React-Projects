import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import RoleDice from "../RoleDice/RoleDice";
import Rules from "../Rules/Rules";

function Game() {
  const [val, setVal] = useState(0);
  const [score, setScore] = useState(0);
  const arr = [1, 2, 3, 4, 5, 6];
  const [diceVal, setDiceVal] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [isNumeberSelected, setIsNumberSelected] = useState(false);

  const play = () => {
    setDiceVal(Math.floor(Math.random() * arr.length() + 1));
  };

  const changeScore = () => {
    if (val != 0) {
      if (diceVal === val) {
        setScore((prev) => prev + diceVal);
      } else {
        setScore((prev) => prev - 2);
      }
    }
  };

  useEffect(() => {
    changeScore();
  }, [setDiceVal, diceVal]);

  // console.log(val)
  // console.log(val)
  return (
    <>
      <Container>
        <Header>
          <Score>
            <Span>{score}</Span>
            <span>Total Score</span>
          </Score>
          <div>
            <Btns>
              {arr.map((value, i) => (
                <Box
                  isSelected={value === val}
                  key={i}
                  onClick={() => setVal(value)}
                >
                  {value}
                </Box>
              ))}
            </Btns>
            <Div>Select Number</Div>
            <Div className="Alert">
              {isNumeberSelected ? (
                <div></div>
              ) : (
                <h1>PLEASE SELECT A NUMBER</h1>
              )}
            </Div>
          </div>
        </Header>
        <Section>
          <div
            onClick={() =>
              val === 0
                ? setIsNumberSelected(false)
                : (setIsNumberSelected(true),
                  setDiceVal(Math.floor(Math.random() * arr.length + 1)))
            }
          >
            <RoleDice DiceVal={diceVal} />
          </div>
          <Span className="something">Click on Dice to Roll</Span>
          <SecBtns onClick={() => (setScore(0), setVal(0))}>
            Reset Score
          </SecBtns>
          <SecBtns onClick={() => setShowRules(!showRules)} className="black">
            Show Rules
          </SecBtns>

          <div>{showRules ? <Rules /> : <div></div>}</div>
        </Section>
      </Container>
    </>
  );
}

export default Game;

const Container = styled.div`
  width: 1440px;
  padding: 64px 80px 144px 80px;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const Header = styled.header`
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 500;
`;

const Span = styled.span`
  font-size: 100px;
  font-weight: 500;
  &.something {
    font-size: 25px;
    margin: 10px 0px;
  }
`;

const Box = styled.div`
  padding: 18px 0px;
  width: 72px;
  height: 36px;
  color: black;
  background-color: white;
  font-weight: 700;
  font-size: 24px;
  border: 1px solid black;
  cursor: pointer;
  background-color: ${(prop) => (prop.isSelected ? "black" : "white")};
  color: ${(prop) => (prop.isSelected ? "white" : "black")};
`;

const Btns = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  right: -130px;
  margin: 10px 0px;

  &.Alert {
    top: 20px;
    color: red;
    font-size: 10px;
  }
`;

const SecBtns = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 18px;
  width: 184px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-align: center;
  margin: 10px 0px;
  &.black {
    color: white;
    background-color: black;
  }
`;
