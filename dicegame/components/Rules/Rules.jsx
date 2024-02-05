import React from 'react'
import styled from 'styled-components'

function Rules() {
    return (
      <>
        <RuleBox>
          <Div>How to play dice game</Div>
          <Div className='rules'>
            <span>Select any Number</span>
            <span>Click on dice image</span>
            <span>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </span>
            <span>if you get wrong guess then 2 point will be dedcuted </span>
          </Div>
        </RuleBox>
      </>
    );
}

export default Rules

const RuleBox = styled.div`
  width: 794px;
  height: 208px;
  padding: 20px;
  background-color: #fbf1f1;
  color: black;

`;

const Div = styled.div`
    color: black;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;

    &.rules{
        margin-bottom: 0px;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        font-family: 500;
    }
`