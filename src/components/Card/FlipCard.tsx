/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React from 'react';
import { Icon } from '../Icon';

interface FlipCardProps {
  className?: string;
  style?: object;
  button?: 'top' | 'bottom';
  flipped?: boolean;
}

const FlipCardStyled = styled.div<FlipCardProps>`
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
          line-height: ${theme.cardTextLineHeight};
          margin-bottom: ${theme.cardMarginBottom};
          padding: ${theme.cardPadding};
          cursor: pointer;
          position: absolute;
          ${theme.dir === 'rtl' ? 'left' : 'right'}: 0;
          ${button === 'bottom' ? 'bottom' : 'top'}: 0;
          opacity: 1;
          transition: opacity 0s 0.15s;
        }
      }

      & > .front {
        margin-${theme.dir === 'rtl' ? 'left' : 'right'}: -100%;
        transition: opacity 0s 0.2s;
        backface-visibility: visible;
        ${
          flipped &&
          css`
            backface-visibility: hidden;
            opacity: 0;
            .flip-button {
              opacity: 0;
              z-index: -1;
            }
          `
        }
      }

      & > .back {
        backface-visibility: ${flipped ? 'visible' : 'hidden'};
        transform: rotateY(180deg);
      }
    }
  `}
`;

const FlipCard: React.FC<FlipCardProps & { children: [React.ReactNode, React.ReactNode] }> = (props) => {
  const [flipped, setFlipped] = React.useState<boolean>(false);
  const handleFlipped = () => {
    setFlipped(!flipped);
  };

  return (
    <FlipCardStyled className={props.className} style={props.style} flipped={flipped} button={props.button}>
      <div className="flip-body">
        <div className="front">
          {props.children[0]}
          <i className="flip-button" onClick={handleFlipped}>
            <Icon name="chevron-right-outline" />
          </i>
        </div>
        <div className="back">
          {props.children[1]}
          <i className="flip-button" onClick={handleFlipped}>
            <Icon name="chevron-left-outline" />
          </i>
        </div>
      </div>
    </FlipCardStyled>
  );
};

export default FlipCard;
