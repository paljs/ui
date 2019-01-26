/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { breakpointDown } from '../../theme/breakpoints';

const LayoutStyle = styled.div`
  ${({ theme }) => css`
    background: ${theme.layoutBg};
    display: block;
    color: ${theme.layoutFg};
    .scrollable-container {
      overflow: auto;
      height: 100vh;
      display: block;
      margin: 0 auto;
      max-width: ${theme.layoutWindowModeMaxWidth};
      ${breakpointDown('sm')`
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    `}
    }
    .layout {
      display: flex;
      flex-direction: column;
      min-width: ${theme.layoutWindowModeMinWidth};
      min-height: ${theme.layoutMinHeight};
      font-family: ${theme.layoutFontFamily};
      font-size: ${theme.layoutFontSize};
      line-height: ${theme.layoutLineHeight};
      .layout-header {
        font-family: ${theme.headerFontFamily};
        font-size: ${theme.headerFontSize};
        line-height: ${theme.headerLineHeight};
        display: block;
        nav {
          box-shadow: ${theme.headerShadow};
          height: ${theme.headerHeight};
          padding: ${theme.headerPadding};
          background: ${theme.headerBg};
          color: ${theme.headerFg};
          align-items: center;
          justify-content: flex-start;
          display: flex;
          a {
            color: ${theme.headerFg};
            &:hover,
            &:focus,
            &:active {
              color: ${theme.headerFg};
            }
          }
        }
        &.fixed {
          position: fixed;
          left: 0;
          right: 0;
          z-index: 1040;
        }
        & ~ .layout-container {
          min-height: calc(
            ${theme.layoutMinHeight + ' - ' + theme.headerHeight}
          );
        }

        &.fixed ~ .layout-container {
          padding-top: ${theme.headerHeight};
          min-height: ${theme.layoutMinHeight};
        }

        &.fixed ~ .layout-container > aside > .main-container {
          height: calc(${theme.sidebarHeight + ' - ' + theme.headerHeight});
        }
      }

      .layout-container {
        display: flex;
        flex: 1;
        flex-direction: row;
        .content {
          display: flex;
          flex: 1;
          flex-direction: column;
          min-width: 0;
          .layout-footer {
            display: block;
            margin-top: auto;
            box-shadow: ${theme.footerShadow};
            nav {
              justify-content: center;
              display: flex;
              padding: ${theme.footerPadding};
              background: ${theme.footerBg};
              color: ${theme.footerFg};
              border-top: 1px solid ${theme.footerSeparator};
              a {
                color: ${theme.footerFgHighlight};
                &:hover,
                &:focus,
                &:active {
                  color: ${theme.footerFgHighlight};
                }
              }
            }
          }
          &.center {
            max-width: 100%;
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: ${theme.layoutContentWidth};
            flex: 0 100 ${theme.layoutContentWidth} !important;
          }

          .columns {
            display: flex;
            flex: 1;
            flex-direction: row;
            width: 100%;
            .main-container {
              order: 1;
              flex: 1 0;
              min-width: 0;
              padding: ${theme.layoutPadding};

              ${breakpointDown('md')`
              padding: ${theme.layoutMediumPadding};
            `}

              ${breakpointDown('sm')`
              padding: ${theme.layoutSmallPadding};
            `}

            &.left {
                order: ${theme.dir === 'rtl' ? '2' : '0'};
              }
              &.start {
                order: 0;
              }
            }
          }
        }
      }
    }
    #overlay-container {
      position: fixed;
      z-index: 1040;
      pointer-events: none;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  `}
`;
export default LayoutStyle;
