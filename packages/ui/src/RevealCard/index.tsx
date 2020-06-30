/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React from 'react';
import { Icon } from '../Icon';
import { CardStyle } from '../Card';

interface RevealCardProps {
  className?: string;
  style?: object;
  button?: 'top' | 'bottom';
  revealed?: boolean;
}

const RevealCardStyled = styled.div<RevealCardProps>`
  ${({ theme, button, revealed }) => css`
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: ${theme.cardShadow};
    margin-bottom: ${theme.cardMarginBottom};
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
      height: calc(100% - ${theme.cardMarginBottom});
      .container {
        position: absolute;
        left: 0;
        top: ${revealed ? '0' : '100%'};
        width: 100%;
        transition: top 0.5s;
      }
    }
    & > .back,
    & > .front {
      ${CardStyle} {
        box-shadow: none;
        margin: 0;
      }
    }
    .reveal-button {
      cursor: pointer;
      position: absolute;
      transform: ${revealed ? 'none' : 'rotate(180deg)'};
      transition: transform 0.3s;
      line-height: ${theme.cardTextLineHeight};
      padding: ${theme.cardPadding};
      ${theme.dir === 'rtl' ? 'left' : 'right'}: 0;
      ${button === 'bottom' ? 'bottom' : 'top'}: 0;
    }
  `}
`;

const RevealCard: React.FC<RevealCardProps & { children: [React.ReactNode, React.ReactNode] }> = (props) => {
  const [revealed, setRevealed] = React.useState<boolean>(false);
  const handleRevealed = () => {
    setRevealed(!revealed);
  };
  return (
    <RevealCardStyled className={props.className} style={props.style} revealed={revealed} button={props.button}>
      <div className="front">{props.children[0]}</div>
      <div className="back">
        <div className="container">{props.children[1]}</div>
      </div>
      <div className="reveal-button" onClick={handleRevealed}>
        <Icon name="chevron-down-outline" />
      </div>
    </RevealCardStyled>
  );
};

export default RevealCard;
