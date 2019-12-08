/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const TooltipStyle = styled.div`
  ${({ theme, status, placement, position }) => {
    const arrowSize = 5;
    const color = status ? theme[`tooltip${status}Bg`] : theme.tooltipBg;
    const arrowRound = Math.round(-arrowSize - arrowSize / 2 + 1.5);

    return css`
      position: absolute;
      box-sizing: border-box;
      z-index: 1000;
      display: flex;
      width: 100%;
      height: 100%;
      min-width: 1px;
      min-height: 1px;
      top: 0px;
      left: 0px;
      .overlay-pane {
        ${overlayPane(placement)}
        position: absolute;
        pointer-events: auto;
        display: flex;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
        ${!position && 'visibility: hidden;'}
        .tooltip {
          background: ${color};
          z-index: 10000;
          border-radius: 5px;
          .content {
            padding: 0.5rem 1.25rem;
            display: flex;
            align-items: center;
            font-size: ${theme.tooltipFontSize};
            color: ${status ? theme.tooltipStatusFg : theme.tooltipFg};
          }

          .arrow {
            position: absolute;
            width: 0;
            height: 0;
            border-bottom: ${arrowSize}px solid ${color};
            border-left: ${arrowSize}px solid transparent;
            border-right: ${arrowSize}px solid transparent;
          }

          .icon {
            font-size: 1.25rem;
          }

          span {
            line-height: 1.25rem;
          }

          .icon + span {
            margin-left: 0.5rem;
          }
          ${placementArrow(placement, arrowSize, arrowRound)}
        }
      }
    `;
  }}
`;
const overlayPane = placement => {
  switch (placement) {
    case 'right':
      return 'transform: translateX(5px);';
    case 'left':
      return 'transform: translateX(-5px);';
    case 'top':
      return 'transform: translateY(-5px);';
    case 'bottom':
      return 'transform: translateY(5px);';
  }
};
const placementArrow = (placement, arrowSize, arrowRound) => {
  switch (placement) {
    case 'right':
      return css`
        .content {
          flex-direction: row-reverse;
        }
        .icon + span {
          margin-right: 0.5rem;
        }
        .arrow {
          left: ${arrowRound}px;
          top: calc(50% - ${arrowSize / 2.5}px);
          transform: rotate(270deg);
        }
      `;
    case 'left':
      return css`
        .arrow {
          right: ${arrowRound}px;
          top: calc(50% - ${arrowSize / 2.5}px);
          transform: rotate(90deg);
        }
      `;
    case 'top':
      return css`
        .arrow {
          bottom: calc(-${arrowSize}px + 1px);
          left: calc(50% - ${arrowSize}px);
          transform: rotate(180deg);
        }
      `;
    case 'bottom':
      return css`
        .arrow {
          top: calc(-${arrowSize}px + 2px);
          left: calc(50% - ${arrowSize}px);
        }
      `;
  }
};
export default TooltipStyle;
