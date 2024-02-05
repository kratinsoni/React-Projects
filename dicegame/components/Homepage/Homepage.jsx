import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

function Homepage() {
  return (
    <>
      <Container>
        <img
          src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1703462400&Signature=hYHLWIMSzV2k-O5gB1WOTBJxTrCWHuCvD4gpblrB~zmD40lZc7DeUZNRxQAgpeOnRi4ZKk1uD59vxKFI39bkqtk0Odrryx1lrleJ3R2nMputIsrnbF0qZVk2S8O2ZIiPwsWhEvA3ZkGheA-R~xQPU93PFAqHO6tjIKHQ5eUqWQj8MLkJhg9vmgAz7F7TbRSmJ3xVxAKN27W065wnbDKrusbVGpi-8WwHUTHmTlP91da0DEt~mY1sLx5KxUW1UJGVdQ6SKLMHsWNa1dYQQW~MLILn7ya6QJYevGkWWvduzBw0p2N~7RWmO63hlay5tnHwiKfE1Hcg7YnzUFB8BxwO-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <Txt>
          <span>DICE GAME</span>
          <StyledNavLink to="/game">PLAY NOW</StyledNavLink>
        </Txt>
      </Container>
    </>
  );
}

export default Homepage;

const Container = styled.div`
  width: 1440px;
  display: flex;
  padding: 180px 129px 154px 129px;
`;

const Txt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  color: black;
  font-size: 96px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 10px 18px;
  width: 184px;
  height: 24px;
  color: white;
  background-color: black;
  font-weight: 600;
  font-size: 16px;
  margin-left: 295px;
  border-radius: 5px;
`;
