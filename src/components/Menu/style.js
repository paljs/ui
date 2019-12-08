/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const MenuStyle = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.menuFontFamily};
    font-size: ${theme.menuFontSize};
    font-weight: ${theme.menuFontWeight};
    background: ${theme.menuBg};
    color: ${theme.menuFg};
    display: block;
    ul.menu-items {
      margin: 0;
      padding: 0;
    }

    .menu-group {
      font-weight: ${theme.menuGroupFontWeight};
      font-size: ${theme.menuGroupFontSize};
      color: ${theme.menuGroupFg};
      padding: ${theme.menuGroupPadding};
    }

    .menu-item {
      a {
        padding: ${theme.menuItemPadding};
        border-radius: ${theme.menuSubmenuItemBorderRadius};
      }

      a:hover,
      a.active {
        background-color: ${theme.menuActiveBg};
        color: ${theme.menuActiveFg};
        font-weight: ${theme.menuActiveFontWeight};
        .menu-icon {
          color: ${theme.menuIconActiveColor};
        }
        .chevron {
          path {
            fill: ${theme.menuIconActiveColor};
            stroke: ${theme.menuIconActiveColor};
          }
        }
      }

      .menu-icon {
        font-size: ${theme.menuIconFontSize};
        width: auto;
        margin: ${theme.menuIconMargin};
        text-align: center;
        color: ${theme.menuIconColor};
      }

      .chevron {
        path {
          fill: ${theme.menuIconColor};
          stroke: ${theme.menuIconColor};
        }

        ${theme.dir === 'rtl' && 'transform: rotateY(180deg);'}
      }
    }

    .menu-items > .menu-item {
      border-bottom: 1px solid ${theme.menuItemSeparator};
      &:first-child {
        border-top: 1px solid ${theme.menuItemSeparator};
      }
    }

    .menu-item > .menu-items {
      background-color: ${theme.menuSubmenuBg};
    }

    .menu-item > .menu-items > .menu-item {
      border: none;
      background: ${theme.menuSubmenuBg};
      color: ${theme.menuSubmenuFg};
      padding: ${theme.menuSubmenuItemContainerPadding};
      &:first-child {
        margin-top: ${theme.menuSubmenuPadding};
      }
      &:last-child {
        margin-bottom: ${theme.menuSubmenuPadding};
      }

      a {
        border: ${theme.menuSubmenuItemBorderWidth +
          ' solid ' +
          theme.menuSubmenuBg};
        padding: ${theme.menuSubmenuItemPadding};
      }

      a:hover {
        color: ${theme.menuSubmenuHoverFg};
        background: ${theme.menuSubmenuHoverBg};
      }

      a.active {
        background-color: ${theme.menuSubmenuActiveBg};
        color: ${theme.menuSubmenuActiveFg};
        border-color: ${theme.menuSubmenuActiveBorderColor};
        box-shadow: none;
        transition: all 300ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
      }
    }
    .menu-items,
    .menu-item > .menu-items {
      list-style-type: none;
      overflow: hidden;
    }

    .menu-item a {
      display: flex;
      color: inherit;
      text-decoration: none;
      align-items: center;

      .menu-title {
        flex: 1;
        ${theme.dir === 'rtl' ? 'text-align: right' : ''};
      }
    }

    &.inverse {
      .menu-item {
        a {
          color: ${theme.menuBg};
        }

        a:hover {
          background-color: ${theme.menuActiveFg};
          color: ${theme.menuActiveBg};
        }

        a.active {
          background-color: ${theme.menuActiveFg};
          color: ${theme.menuActiveBg};
        }
      }

      .menu-group {
        color: ${theme.menuBg};
      }
    }
  `};
`;
const ItemStyle = styled.li`
  ul {
    &.expanded {
      max-height: 1500px;
      transition: max-height 0.5s cubic-bezier(1, 0.15, 1, 1);
    }

    &.collapsed {
      max-height: 0;
      transition: max-height 0.5s cubic-bezier(0, 1, 0.3, 1) -100ms;
    }
  }
`;
export { MenuStyle, ItemStyle };
