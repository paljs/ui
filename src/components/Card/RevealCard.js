import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowUp, ArrowDown } from '../../svg';

const RevealCardStyled = styled.div`
  ${({ theme, button, revealed }) => css`
    display: block;
    position: relative;
    overflow: hidden;
    & > .front {
      display: block;
      height: 100%;
    }

    & > .back {
      position: absolute;
      top: ${revealed ? '0' : '100%'};
      right: 0;
      left: 0;
      overflow: hidden;
      transition: ${revealed ? 'none' : 'top 0s 0.5s'};
      height: calc(100% - ${theme.cardMargin});
      .container {
        position: absolute;
        left: 0;
        top: ${revealed ? '0' : '100%'};
        width: 100%;
        transition: top 0.5s;
      }
    }
    .reveal-button {
      cursor: pointer;
      position: absolute;
      transition: transform 0.3s;
      line-height: ${theme.cardLineHeight};
      margin-bottom: ${theme.cardMargin};
      padding: ${theme.cardPadding};
      ${theme.dir === 'ltr' ? 'right: 0;' : 'left: 0;'};
      ${button === 'bottom' ? 'bottom: 0;' : 'top: 0;'};
    }
  `}
`;
function RevealCard(props) {
  const [revealed, setRevealed] = useState(false);
  const handleRevealed = () => {
    setRevealed(!revealed);
  };
  return (
    <RevealCardStyled revealed={revealed} button={props.button}>
      <div className="front">{props.children[0]}</div>
      <div className="back">
        <div className="container">{props.children[1]}</div>
      </div>
      <div className="reveal-button" onClick={handleRevealed}>
        {revealed ? <ArrowDown /> : <ArrowUp />}
      </div>
    </RevealCardStyled>
  );
}
RevealCard.propTypes = {
  button: PropTypes.oneOf(['top', 'bottom'])
};
export default RevealCard;
