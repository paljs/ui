/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, ArrowLeft } from '../../svg';

const FlipCardStyled = styled.div`
  ${({ theme, flipped, button }) => css`
    display: block;
    position: relative;
    perspective: 1200px;
    .flip-body {
      display: flex;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      ${flipped ? 'transform: rotateY(-180deg);' : ''}
      & > .front,
      & > .back {
        flex: 1;

        .flip-button {
          line-height: ${theme.cardLineHeight};
          margin-bottom: ${theme.cardMargin};
          padding: ${theme.cardPadding};
          cursor: pointer;
          position: absolute;
          ${theme.dir === 'rtl' ? 'left: 0;' : 'right: 0;'}
          ${button === 'bottom' ? 'bottom: 0;' : 'top: 0;'}
          opacity: 1;
          transition: opacity 0s 0.15s;
        }
      }

      & > .front {
        ${theme.dir === 'rtl' ? 'margin-left: -100%;' : 'margin-right: -100%;'}
        transition: opacity 0s 0.2s;
        backface-visibility: visible;
        ${flipped &&
          css`
            backface-visibility: hidden;
            opacity: 0;
            .flip-button {
              opacity: 0;
              z-index: -1;
            }
          `}
      }

      & > .back {
        backface-visibility: ${flipped ? 'visible' : 'hidden'};
        transform: rotateY(180deg);
      }
    }
  `}
`;
function FlipCard(props) {
  const [flipped, setFlipped] = useState(false);
  const handleFlipped = () => {
    setFlipped(!flipped);
  };

  return (
    <FlipCardStyled
      className={props.className}
      style={props.style}
      flipped={flipped}
      button={props.button}
    >
      <div className="flip-body">
        <div className="front">
          {props.children[0]}
          <i className="flip-button" onClick={handleFlipped}>
            <ArrowRight />
          </i>
        </div>
        <div className="back">
          {props.children[1]}
          <i className="flip-button" onClick={handleFlipped}>
            <ArrowLeft />
          </i>
        </div>
      </div>
    </FlipCardStyled>
  );
}
FlipCard.propTypes = {
  classNames: PropTypes.string,
  style: PropTypes.object,
  button: PropTypes.oneOf(['top', 'bottom'])
};
export default FlipCard;
