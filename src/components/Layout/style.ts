/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from '../../theme/styled-components';
import PropTypes from 'prop-types';
import { breakpointDown } from '../../theme/breakpoints';
import SidebarStyle from '../Sidebar/style';

interface LayoutProps {
  withScroll: boolean;
  windowMode: boolean;
  withSubHeader: boolean;
}

const LayoutStyle = styled.div<LayoutProps>`
  ${({ theme, withScroll, windowMode, withSubHeader }) => {
    const windowPadding = theme.layoutWindowModePaddingTop;
    return css`
      text-align: ${theme.dir === 'rtl' ? 'right' : 'left'};
      -webkit-font-smoothing: antialiased;
      .layout {
        display: flex;
        flex-direction: column;
        min-width: ${theme.layoutWindowModeMinWidth};
        font-family: ${theme.layoutFontFamily};
        font-size: ${theme.layoutFontSize};
        line-height: ${theme.layoutLineHeight};
        color: ${theme.layoutFg};
        background: ${theme.layoutBg};
        min-height: ${theme.layoutMinHeight};
      }

      ${(withScroll || windowMode) &&
        css`
          .scrollable-container {
            overflow: auto;
            height: 100vh;
            display: block;
            ${breakpointDown('sm')`
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
            `}
          }
        `}

      ${windowMode &&
        css`
          background: ${theme.layoutWindowModeBg};
          display: block;
          .scrollable-container {
            max-width: ${theme.layoutWindowModeMaxWidth};
            margin: 0 auto;
          }

          .layout ${HeaderStyle} nav {
            max-width: ${theme.layoutWindowModeMaxWidth};
            margin: 0 auto;
          }

          @media screen and (min-width: ${theme.layoutWindowModeMaxWidth} + 20px) {
            ${getWindowMode(theme, windowPadding, 4)}

            ${LayoutStyle}.with-scroll {
              .scrollable-container {
                height: calc(100vh - ${windowPadding});
              }
            }
          }
          @media screen and (min-width: ${theme.layoutWindowModeMaxWidth} + 150px) {
            ${getWindowMode(theme, windowPadding, 2)}

            ${LayoutStyle}.with-scroll {
              .scrollable-container {
                height: calc(100vh - ${windowPadding});
              }
            }
          }
          @media screen and (min-width: ${theme.layoutWindowModeMaxWidth} + 300px) {
            ${getWindowMode(theme, windowPadding, 1)}

            ${LayoutStyle}.with-scroll {
              .scrollable-container {
                height: calc(100vh - ${windowPadding});
              }
            }
          }
        `}

      ${withSubHeader &&
        css`
          ${SidebarStyle} .main-container {
            box-shadow: none;
          }
        `}
      #overlay-container {
        position: fixed;
        z-index: 1040;
        pointer-events: none;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    `;
  }}
`;

const getWindowMode = (theme, padding, action) => {
  return css`
    padding-top: calc(${padding} / ${action});

    ${SidebarStyle}.fixed {
      left: calc((100vw - ${theme.layoutWindowModeMaxWidth}) / 2);
    }

    .layout ${LayoutContainer} {
      ${SidebarStyle}.fixed.right {
        right: calc((100vw - ${theme.layoutWindowModeMaxWidth}) / 2);
      }

      ${SidebarStyle}.fixed {
        top: calc(${theme.headerHeight} + calc(${padding} / ${action}));
      }
    }

    .scrollable-container {
      height: calc(100vh - calc(${padding} / ${action}));
      box-shadow: ${theme.layoutWindowShadow};
    }
  `;
};

const LayoutContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const LayoutContent = styled.div<{ center: boolean }>`
  ${({ theme, center }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    ${center &&
      css`
        max-width: 100%;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: ${theme.layoutContentWidth};
        flex: 0 100 ${theme.layoutContentWidth} !important;
      `}
  `}
`;

const LayoutColumns = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

const LayoutColumn = styled.div<{ position: 'start' | 'left' }>`
  ${({ theme, position }) => css`
    order: 1;
    flex: 1 0;
    min-width: 0;
    padding: ${theme.layoutPadding};

    ${position === 'left' ? (theme.dir === 'rtl' ? 'order: 2;' : 'order: 0;') : position === 'start' && 'order: 0;'}

    ${breakpointDown('md')`padding: ${theme.layoutMediumPadding};`}

    ${breakpointDown('sm')`padding: ${theme.layoutSmallPadding};`}
  `}
`;

const HeaderStyle = styled.header<{ fixed: boolean }>`
  ${({ theme, fixed }) => css`
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
    & ~ ${LayoutContainer} {
      min-height: calc(${theme.layoutMinHeight + ' - ' + theme.headerHeight});
    }

    ${fixed &&
      css`
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1040;
        & ~ ${LayoutContainer} {
          padding-top: ${theme.headerHeight};
          min-height: ${theme.layoutMinHeight};
        }
        ~ ${LayoutContainer} > aside > .main-container {
          height: calc(${theme.sidebarHeight + ' - ' + theme.headerHeight});
        }
      `}
  `}
`;

const FooterStyle = styled.footer`
  ${({ theme }) => css`
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
  `}
`;

export { LayoutStyle, LayoutContainer, LayoutContent, LayoutColumns, LayoutColumn, HeaderStyle, FooterStyle };
