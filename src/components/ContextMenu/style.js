import styled, { css } from '../../theme/styled-components';

const ContextMenuStyle = styled.div`
  ${({ theme, placement, position }) => {
    const arrowSize = theme.contextMenuArrowSize;
    const arrowContentSize = arrowSize - 2;
    const arrowRound = Math.round(-arrowSize - arrowSize / 2 + 1);

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
        .context-menu-overlay {
          border: 2px solid ${theme.contextMenuBorder};
          border-radius: ${theme.contextMenuBorderRadius};
          background: ${theme.contextMenuBg};
          box-shadow: ${theme.contextMenuShadow};

          .arrow {
            position: absolute;
            width: 0;
            height: 0;
            border-left: ${arrowSize}px solid transparent;
            border-right: ${arrowSize}px solid transparent;
            border-bottom: ${arrowSize}px solid ${theme.contextMenuBorder};

            &::after {
              position: absolute;
              content: ' ';
              width: 0;
              height: 0;
              top: 3px;
              left: calc(50% - ${arrowContentSize}px);
              border-left: ${arrowContentSize}px solid transparent;
              border-right: ${arrowContentSize}px solid transparent;
              border-bottom: ${arrowContentSize}px solid ${theme.contextMenuBg};
            }
          }
          ${placementArrow(placement, arrowSize, arrowRound)}
          .context-menu {
            display: inline;
            font-size: 0.875rem;
            line-height: 1.5rem;
            ul.menu-items {
              margin: 0;
              padding: 0.5rem 0;

              .menu-item {
                border: none;
                white-space: nowrap;

                &:first-child {
                  border: none;
                }

                a {
                  cursor: pointer;
                  border-radius: 0;
                  padding: 0;

                  .menu-icon {
                    font-size: 1.5rem;
                    width: auto;
                  }

                  .menu-title {
                    padding: 0.375rem 3rem;
                    ${theme.dir === 'rtl' && 'text-align: right;'}
                  }

                  .menu-icon ~ .menu-title {
                    padding-${theme.dir === 'rtl' ? 'right' : 'left'}: 0;
                  }

                  .menu-icon:first-child {
                    padding-${theme.dir === 'rtl' ? 'right' : 'left'}: 1rem;
                  }
                }
              }
            }
            .menu-items .menu-item a {
              color: ${theme.contextMenuFg};
              font-weight: ${theme.fontWeightNormal};

              .menu-icon {
                color: ${theme.contextMenuFg};
              }

              &:focus,
              &:active,
              &:hover {
                color: ${theme.contextMenuActiveFg};
                background: ${theme.contextMenuActiveBg};
                font-weight: ${theme.fontWeightNormal};

                .menu-icon {
                  color: ${theme.contextMenuActiveFg};
                }
              }
            }
          }
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
export default ContextMenuStyle;
