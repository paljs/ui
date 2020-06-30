import styled, { css } from 'styled-components';
import { PositionKeys } from '../utils';

const overlayPane = (placement: PositionKeys, size: number) => {
  switch (placement) {
    case 'right':
      return `transform: translateX(${size}px);`;
    case 'left':
      return `transform: translateX(-${size}px);`;
    case 'top':
      return `transform: translateY(-${size}px);`;
    case 'bottom':
      return `transform: translateY(${size}px);`;
  }
};

const placementArrow = (placement: PositionKeys, arrowSize: string, arrowRound: number) => {
  switch (placement) {
    case 'right':
      return css`
        .arrow {
          left: ${arrowRound}px;
          top: calc(50% - ${arrowSize} / 2);
          transform: rotate(270deg);
        }
      `;
    case 'left':
      return css`
        .arrow {
          right: ${arrowRound}px;
          top: calc(50% - ${arrowSize} / 2);
          transform: rotate(90deg);
        }
      `;
    case 'top':
      return css`
        .arrow {
          bottom: calc(-${arrowSize} + 1px);
          left: calc(50% - ${arrowSize});
          transform: rotate(180deg);
        }
      `;
    case 'bottom':
      return css`
        .arrow {
          top: calc(-${arrowSize} + 2px);
          left: calc(50% - ${arrowSize});
        }
      `;
  }
};

interface OverlayStyleProps {
  placement: PositionKeys;
  position: boolean;
  size: number;
  arrowRound?: number;
  arrowSize?: string;
}

export const OverlayStyle = styled.div<OverlayStyleProps>`
  ${({ placement, position, size, arrowSize, arrowRound }) => css`
    position: absolute;
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 1px;
    min-height: 1px;
    top: 0;
    left: 0;
    .overlay-pane {
      position: absolute;
      pointer-events: auto;
      display: flex;
      max-width: 100%;
      max-height: 100%;
      box-sizing: border-box;
      ${overlayPane(placement, size)}
      ${!position && 'visibility: hidden;'}
      ${arrowSize && arrowRound && placementArrow(placement, arrowSize, arrowRound)}

      .icon + span {
        margin-${placement === 'right' ? 'right' : 'left'}: 0.5rem;
      }
      ${
        placement === 'right' &&
        css`
          .content {
            flex-direction: row-reverse;
          }
        `
      }
    }
  `}
`;
