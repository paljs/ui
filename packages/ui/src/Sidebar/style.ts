/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { breakpointDown } from '../breakpoints';
import { MenuStyle } from '../Menu/style';
import { scrollbars } from '../utils';
import { SidebarStyleProps } from './index';
import { LayoutContent } from '../Layout';

const compacted = css<SidebarStyleProps>`
  ${MenuStyle} {
    width: ${({ theme }) => theme.sidebarWidthCompact};

    .menu-item a.active {
      position: relative;

      &::before {
        position: absolute;
        content: '';
        top: 0;
        height: 100%;
        width: 4px;
        background: ${({ theme }) => theme.sidebarMenuItemHighlightColor};
        ${({ theme }) => (theme.dir === 'rtl' ? 'right' : 'left')}: 0;
      }
    }

    > .menu-items > .menu-item > a {
      span,
      .chevron {
        display: none;
      }
    }

    .menu-items > .menu-item {
      transition: border-color 1s ease;

      &.menu-group {
        display: block;
        color: transparent;
        width: 0;
        padding: 0;
        overflow: hidden;
      }

      i {
        margin-right: 0;
      }

      a {
        justify-content: center;
      }

      & > .expanded {
        display: none;
      }
    }
  }
  ${({ property, theme, fixed }) => {
    if (fixed) {
      switch (property) {
        case 'right':
          return `
          & ~ ${LayoutContent} {
            margin-right: ${theme.sidebarWidthCompact};
          }
          & ~ ${LayoutContent}.center {
            padding-right: ${theme.sidebarWidthCompact};
          }
        `;
        case 'left':
          return `
          & ~ ${LayoutContent} {
            margin-left: ${theme.sidebarWidthCompact};
          }
          & ~ ${LayoutContent}.center {
            padding-left: ${theme.sidebarWidthCompact};
          }
        `;
        case 'start':
          return `
          & ~ ${LayoutContent} {
            ${theme.dir == 'rtl' ? 'margin-right:' : 'margin-left:'} ${theme.sidebarWidthCompact};
          }
          & ~ ${LayoutContent}.center {
            ${theme.dir == 'rtl' ? 'padding-right:' : 'padding-left:'} ${theme.sidebarWidthCompact};
          }
        `;
        case 'end':
          return `
          & ~ ${LayoutContent} {
            ${theme.dir == 'rtl' ? 'margin-left:' : 'margin-right:'} ${theme.sidebarWidthCompact};
          }
          & ~ ${LayoutContent}.center {
            ${theme.dir == 'rtl' ? 'padding-left:' : 'padding-right:'} ${theme.sidebarWidthCompact};
          }
        `;
        default:
          break;
      }
    }
  }}
`;

const fixedStyle = css<SidebarStyleProps>`
  ${({ theme, property, state }) => css`
    position: fixed;
    height: 100%;
    z-index: 999;
    top: ${theme.headerHeight};
    bottom: 0;
    ${property &&
    (state === 'hidden' && ['left', 'start'].includes(property)
      ? `
        & + .content {
          margin-left: 0;
        }
      `
      : state === 'hidden' && ['right', 'end'].includes(property)
      ? `
        & + .content {
          margin-right: 0;
        }
      `
      : '')}
    ${property === 'right'
      ? 'right: 0;'
      : property === 'left'
      ? 'left: 0;'
      : property === 'start'
      ? theme.dir == 'rtl'
        ? 'right: 0;'
        : 'left: 0;'
      : property === 'end'
      ? theme.dir == 'rtl'
        ? 'left: 0;'
        : 'right: 0;'
      : ''}
  `}
`;

const SidebarStyle = styled.aside<SidebarStyleProps>`
  ${({ theme, property, state, containerFixed, fixed }) => css`
    background-color: ${theme.sidebarBackgroundColor};
    box-shadow: ${theme.sidebarShadow};
    color: ${theme.sidebarTextColor};
    font-family: ${theme.sidebarTextFontFamily};
    font-size: ${theme.sidebarTextFontSize};
    font-weight: ${theme.sidebarTextFontWeight};
    line-height: ${theme.sidebarTextLineHeight};
    width: ${theme.sidebarWidth};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: auto;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0ms;

    order: ${
      property === 'right'
        ? theme.dir == 'rtl'
          ? '0'
          : '4'
        : property === 'left'
        ? theme.dir == 'rtl'
          ? '4'
          : '0'
        : property === 'end'
        ? '4'
        : '0'
    };

    ${
      state === 'hidden'
        ? 'width: 0;padding: 0;'
        : state === 'compacted'
        ? `width: ${theme.sidebarWidthCompact};`
        : `width: ${theme.sidebarWidth};`
    }
    .main-container {
      height: ${theme.sidebarHeight};
      transform: translate3d(0, 0, 0);
      display: flex;
      flex-direction: column;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0ms;
      ${
        state === 'hidden'
          ? 'width: 0;padding: 0;'
          : state === 'compacted'
          ? `width: ${theme.sidebarWidthCompact};`
          : `width: ${theme.sidebarWidth};`
      }
      ${containerFixed && 'position: fixed;'}
    }

    .scrollable {
      flex: 1;
      position: relative;
      -webkit-transform: translate3d(0, 0, 0);
      ${
        state === 'hidden'
          ? 'width: 0;padding: 0;overflow: hidden;'
          : `overflow-y: auto;overflow-x: hidden;padding: ${theme.sidebarPadding};`
      }
      ${breakpointDown('sm')`
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      `}
      ${scrollbars(theme.sidebarScrollbarColor, theme.sidebarScrollbarBackgroundColor, theme.sidebarScrollbarWidth)}
    }

    ${fixed && fixedStyle}

    ${state === 'compacted' && compacted}


  header,
  footer {
      display: block;
      ${state === 'hidden' ? 'width: 0;padding: 0;overflow: hidden;' : `padding: ${theme.sidebarPadding};`}
    }

    header {
      height: ${theme.sidebarHeaderHeight};
    }

    footer {
      margin-top: auto;
      height: ${theme.sidebarFooterHeight};
    }

    ${MenuStyle} {
      margin: 0 -${theme.sidebarPadding} -${theme.sidebarPadding};
    }
  `}
`;
export default SidebarStyle;
