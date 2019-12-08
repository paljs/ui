/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { breakpointDown } from '../../theme';
import { MenuStyle } from '../Menu/style';
/* eslint-disable indent */

const compacted = css`
  ${MenuStyle} {
    width: ${({ theme }) => theme.sidebarWidthCompact};

    .menu-item a.active {
      position: relative;

      &::before {
        position: absolute;
        content: '';
        ${({ theme }) => (theme.dir === 'rtl' ? 'right: 0;' : 'left: 0;')}
        top: 0;
        height: 100%;
        width: 4px;
        background: ${({ theme }) => theme.colorFgHighlight};
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
          & ~ .content {
            margin-right: ${theme.sidebarWidthCompact};
          }
          & ~ .content.center {
            padding-right: ${theme.sidebarWidthCompact};
          }
        `;
        case 'left':
          return `
          & ~ .content {
            margin-left: ${theme.sidebarWidthCompact};
          }
          & ~ .content.center {
            padding-left: ${theme.sidebarWidthCompact};
          }
        `;
        case 'start':
          return `
          & ~ .content {
            ${theme.dir == 'rtl' ? 'margin-right:' : 'margin-left:'} ${
            theme.sidebarWidthCompact
          };
          }
          & ~ .content.center {
            ${theme.dir == 'rtl' ? 'padding-right:' : 'padding-left:'} ${
            theme.sidebarWidthCompact
          };
          }
        `;
        case 'end':
          return `
          & ~ .content {
            ${theme.dir == 'rtl' ? 'margin-left:' : 'margin-right:'} ${
            theme.sidebarWidthCompact
          };
          }
          & ~ .content.center {
            ${theme.dir == 'rtl' ? 'padding-left:' : 'padding-right:'} ${
            theme.sidebarWidthCompact
          };
          }
        `;
        default:
          break;
      }
    }
  }}
`;

const fixedStyle = css`
  ${({ theme, property, state }) => css`
    position: fixed;
    height: 100%;
    z-index: 999;
    top: ${theme.headerHeight};
    bottom: 0;
    ${state === 'hidden' && ['left', 'start'].includes(property)
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
      : ''}
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

const SidebarStyle = styled.aside`
  ${({ theme, property, state, containerFixed, fixed }) => css`
  font-size: ${theme.sidebarFontSize};
  font-weight: ${theme.sidebarFontWeight};
  box-shadow: ${theme.sidebarShadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: auto;
  transition: width .3s cubic-bezier(0.4, 0, 0.6, 1) 0ms;

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
    ${
      state === 'hidden'
        ? 'width: 0;padding: 0;'
        : state === 'compacted'
        ? `width: ${theme.sidebarWidthCompact};`
        : `width: ${theme.sidebarWidth};`
    }
    height: ${theme.sidebarHeight};
    background: ${theme.sidebarBg};
    transform: translate3d(0, 0, 0);
    display: flex;
    flex-direction: column;
    transition: width .3s cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    ${containerFixed && 'position: fixed;'}
  }

  .scrollable {
    ${
      state === 'hidden'
        ? 'width: 0;padding: 0;overflow: hidden;'
        : `overflow-y: auto;overflow-x: hidden;padding: ${
            theme.sidebarPadding
          };`
    }
    flex: 1;
    position: relative;
    -webkit-transform: translate3d(0, 0, 0);
    ${breakpointDown('sm')`
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      `}
  }
  
  ${fixed && fixedStyle}

  ${state === 'compacted' && compacted}


  header,
  footer
   {
     ${
       state === 'hidden'
         ? 'width: 0;padding: 0;overflow: hidden;'
         : `padding: ${theme.sidebarPadding};`
     }
    display: block;
    
  }

  header{
    height: ${theme.sidebarHeaderHeight};
  }

  footer {
    margin-top: auto;
    height: ${theme.sidebarFooterHeight};
  }

  ${MenuStyle}{
    margin: 0 -${theme.sidebarPadding} -${theme.sidebarPadding};
  }
`}
`;
export default SidebarStyle;
