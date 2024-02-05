import React from 'react'
import styled from 'styled-components'

function RoleDice({DiceVal='1'}) {

    const renderImg = () => {
        if (DiceVal === 1) {
          return <img src="/components/RoleDice/dice_1.png" alt="dice_1" />;
        } else if (DiceVal === 2) {
          return <img src="/components/RoleDice/dice_2.png" alt="dice_2" />;
        } else if (DiceVal === 3) {
          return <img src="/components/RoleDice/dice_3.png" alt="dice_3" />;
        } else if (DiceVal === 4) {
          return <img src="/components/RoleDice/dice_4.png" alt="dice_4" />;
        } else if (DiceVal === 5) {
          return <img src="/components/RoleDice/dice_5.png" alt="dice_5" />;
        } else if (DiceVal === 6) {
          return <img src="/components/RoleDice/dice_6.png" alt="dice_6" />;
        }
    }

    return (
      <>
        <Div>
        {renderImg()}
        </Div>
      </>
    );
}

export default RoleDice

const Div = styled.div`
    cursor: pointer;
`
