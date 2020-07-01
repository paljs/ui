/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { ThemeKeys, ThemeObject } from '@paljs/theme';
import { breakpointDown } from '../breakpoints';
import SidebarStyle from '../Sidebar/style';
import { scrollbars } from '../utils';

interface LayoutProps {
  withScroll?: boolean;
  windowMode?: boolean;
  withSubHeader?: boolean;
}

const LayoutContainer = styled.div`
  display: flex;
  flex: 1;
  -ms-flex: 1 1 auto;
  flex-direction: row;
`;

const LayoutContent = styled.div<{ center?: boolean }>`
  ${({ theme, center }) => css`
    display: flex;
    flex: 1;
    -ms-flex: 1 1 auto;
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
  -ms-flex: 1 1 auto;
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

const LayoutColumn = styled.div<{ position?: 'start' | 'left' }>`
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

const HeaderStyle = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.headerBackgroundColor};
    color: ${theme.headerTextColor};
    font-family: ${theme.headerTextFontFamily};
    font-size: ${theme.headerTextFontSize};
    font-weight: ${theme.headerTextFontWeight};
    line-height: ${theme.headerTextLineHeight};
    display: block;
    nav {
      color: ${theme.headerTextColor};
      box-shadow: ${theme.headerShadow};
      height: ${theme.headerHeight};
      padding: ${theme.headerPadding};
      align-items: center;
      justify-content: flex-start;
      display: flex;
      a {
        color: ${theme.headerTextColor};
        &:hover,
        &:focus,
        &:active {
          color: ${theme.headerTextColor};
        }
      }
    }
    & ~ ${LayoutContainer} {
      min-height: calc(${theme.layoutMinHeight + ' - ' + theme.headerHeight});
    }

    &.fixed {
      position: fixed;
      top: 0;
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
    }
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
      background-color: ${theme.footerBackgroundColor};
      border-top: ${theme.footerDividerWidth} ${theme.footerDividerStyle} ${theme.footerDividerColor};
      color: ${theme.footerTextColor};
      font-family: ${theme.footerTextFontFamily};
      font-size: ${theme.footerTextFontSize};
      font-weight: ${theme.footerTextFontWeight};
      line-height: ${theme.footerTextLineHeight};
      padding: ${theme.footerPadding};
      a {
        color: ${theme.footerTextHighlightColor};
        &:hover,
        &:focus,
        &:active {
          color: ${theme.footerTextHighlightColor};
        }
      }
    }
  `}
`;

const getWindowMode = (theme: ThemeObject, padding: ThemeKeys, action: number) => {
  return css`
    padding-top: calc(${padding} / ${action});

    ${HeaderStyle}.fixed {
      top: calc(${padding} / ${action});
    }

    ${HeaderStyle}.fixed ~ .layout-container ${SidebarStyle} .main-container-fixed {
      height: calc(100vh - calc(${padding} / ${action}) - ${theme.headerHeight});
      top: calc(calc(${padding} / ${action}) + ${theme.headerHeight});
    }
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

const LayoutStyle = styled.div<LayoutProps>`
  ${({ theme, withScroll, windowMode, withSubHeader }) => {
    const windowPadding = theme.layoutWindowModePaddingTop;
    return css`
      text-align: ${theme.dir === 'rtl' ? 'right' : 'left'};
      -webkit-font-smoothing: antialiased;

      .scrollable-container {
        ${scrollbars(theme.layoutScrollbarColor, theme.layoutScrollbarBackgroundColor, theme.layoutScrollbarWidth)}
      }
      .layout {
        display: flex;
        flex-direction: column;
        min-width: ${theme.layoutWindowModeMinWidth};
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
        background: ${theme.layoutWindowModeBackgroundColor};
        display: block;
        .scrollable-container {
          max-width: ${theme.layoutWindowModeMaxWidth};
          margin: 0 auto;
        }

        .layout ${HeaderStyle} {
          max-width: ${theme.layoutWindowModeMaxWidth};
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          nav {
            max-width: ${theme.layoutWindowModeMaxWidth};
            margin: 0 auto;
          }
        }

        @media screen and (min-width: ${theme.layoutWindowModeMaxWidth} + 20px) {
          ${getWindowMode(theme, windowPadding, 4)}

          #oah-layout.with-scroll {
            .scrollable-container {
              height: calc(100vh - ${windowPadding});
            }
          }
        }
        @media screen and (min-width: ${theme.layoutWindowModeMaxWidth} + 150px) {
          ${getWindowMode(theme, windowPadding, 2)}

          #oah-layout.with-scroll {
            .scrollable-container {
              height: calc(100vh - ${windowPadding});
            }
          }
        }
        @media screen and (min-width: ${theme.layoutWindowModeMaxWidth} + 300px) {
          ${getWindowMode(theme, windowPadding, 1)}

          #oah-layout.with-scroll {
            .scrollable-container {
              height: calc(100vh - ${windowPadding});
            }
          }
        }
      `}
      .layout {
        background-color: ${theme.layoutBackgroundColor};
        color: ${theme.layoutTextColor};
        font-family: ${theme.layoutTextFontFamily};
        font-size: ${theme.layoutTextFontSize};
        font-weight: ${theme.layoutTextFontWeight};
        line-height: ${theme.layoutTextLineHeight};
        min-height: ${theme.layoutMinHeight};
      }
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

export { LayoutStyle, LayoutContainer, LayoutContent, LayoutColumns, LayoutColumn, HeaderStyle, FooterStyle };
