/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const PopoverStyle = styled.div`
  ${({ theme, placement, position }) => {
    const arrowSize = theme.popoverArrowSize;
    const arrowRound = Math.round(-arrowSize - arrowSize / 2 + 1);

    return css`
      position: absolute;
      pointer-events: none;
      box-sizing: border-box;
      z-index: 1000;
      display: flex;
      width: 100%;
      height: 100%;
      min-width: 1px;
      min-height: 1px;
      flex-direction: column;
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
        .popover {
          border: 2px solid ${theme.popoverBorder};
          border-radius: ${theme.popoverBorderRadius};
          background: ${theme.popoverBg};
          box-shadow: ${theme.popoverShadow};

          .primitive-overlay {
            color: ${theme.popoverFg};
            padding: 0.75rem 1rem;
          }

          .arrow {
            position: absolute;
            width: 0;
            height: 0;
            border-left: ${arrowSize}px solid transparent;
            border-right: ${arrowSize}px solid transparent;
            border-bottom: ${arrowSize}px solid ${theme.popoverBorder};

            &::after {
              position: absolute;
              content: ' ';
              width: 0;
              height: 0;
              top: 3px;
              left: calc(50% - ${arrowSize}px);
              border-left: ${arrowSize}px solid transparent;
              border-right: ${arrowSize}px solid transparent;
              border-bottom: ${arrowSize}px solid ${theme.popoverBg};
              clip-path: inset(0 0 2px);
            }
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
      return 'transform: translateX(15px);';
    case 'left':
      return 'transform: translateX(-15px);';
    case 'top':
      return 'transform: translateY(-15px);';
    case 'bottom':
      return 'transform: translateY(15px);';
  }
};
const placementArrow = (placement, arrowSize, arrowRound) => {
  switch (placement) {
    case 'right':
      return css`
        .arrow {
          left: ${arrowRound}px;
          top: calc(50% - ${arrowSize / 2}px);
          transform: rotate(270deg);
        }
      `;
    case 'left':
      return css`
        .arrow {
          right: ${arrowRound}px;
          top: calc(50% - ${arrowSize / 2}px);
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
export default PopoverStyle;
