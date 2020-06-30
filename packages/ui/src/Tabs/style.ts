/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { scrollbars } from '../utils';

const TabsStyle = styled.div<{ fullWidth?: boolean }>`
  ${({ theme, fullWidth }) => css`
    display: block;
    background-color: ${theme.tabsetBackgroundColor};
    border-radius: ${theme.tabsetBorderRadius};
    box-shadow: ${theme.tabsetShadow};
    .tabs {
      border-bottom: ${theme.tabsetDividerWidth} ${theme.tabsetDividerStyle} ${theme.tabsetDividerColor};
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      padding: 0;
      ${fullWidth && 'justify-content: space-around;'}

      .tab {
        cursor: pointer;
        margin-bottom: -1px;
        text-align: center;
        position: relative;
        &.active a::before {
          display: block;
        }
        a {
          background-color: ${theme.tabsetTabBackgroundColor};
          padding: ${theme.tabsetTabPadding};
          color: ${theme.tabsetTabTextColor};
          font-family: ${theme.tabsetTabTextFontFamily};
          font-size: ${theme.tabsetTabTextFontSize};
          font-weight: ${theme.tabsetTabTextFontWeight};
          line-height: ${theme.tabsetTabTextLineHeight};
          text-transform: ${theme.tabsetTabTextTransform};
          display: flex;
          align-items: center;
          position: relative;
          text-decoration: none;

          &::before {
            display: none;
            position: absolute;
            content: '';
            width: 100%;
            border-radius: 3px;
            bottom: -2px;
            left: 0;
            background-color: ${theme.tabsetTabUnderlineColor};
            height: ${theme.tabsetTabUnderlineWidth};
          }
          .tabs-icon {
            vertical-align: middle;
          }

          .tabs-icon + span {
            margin-${theme.dir === 'rtl' ? 'right' : 'left'}: 0.5rem;
          }
        }

        &.active {
          a {
            background-color: ${theme.tabsetTabActiveBackgroundColor};
            color: ${theme.tabsetTabActiveTextColor};
            &::before {
              background-color: ${theme.tabsetTabActiveUnderlineColor};
            }
          }
        }
        &:focus {
          a {
            background-color: ${theme.tabsetTabFocusBackgroundColor};
            color: ${theme.tabsetTabFocusTextColor};
            &::before {
              background-color: ${theme.tabsetTabFocusUnderlineColor};
            }
          }
        }

        &:hover {
          a {
            color: ${theme.tabsetTabHoverTextColor};
            background-color: ${theme.tabsetTabHoverBackgroundColor};
            &::before {
              background-color: ${theme.tabsetTabHoverUnderlineColor};
            }
          }
        }
        &.disabled {
          & > * {
            opacity: 0.5;
          }
          cursor: default;
          pointer-events: none;
          a {
            background-color: ${theme.tabsetTabDisabledBackgroundColor};
            color: ${theme.tabsetTabDisabledTextColor};
            cursor: default;
            pointer-events: none;
            &::before {
              background-color: ${theme.tabsetTabDisabledUnderlineColor};
            }
          }
        }

        &.responsive {
          @media screen and (max-width: ${theme.tabsetTabTextHideBreakpoint}) {
            a span {
              display: none;
            }
          }
        }
      }
    }
    .tab-content {
      flex: 1;
      -ms-flex: 1 1 auto;
      overflow: auto;
      background-color: ${theme.tabsetContentBackgroundColor};
      color: ${theme.tabsetContentTextColor};
      font-family: ${theme.tabsetContentTextFontFamily};
      font-size: ${theme.tabsetContentTextFontSize};
      font-weight: ${theme.tabsetContentTextFontWeight};
      line-height: ${theme.tabsetContentTextLineHeight};
      padding: ${theme.tabsetContentPadding};
      ${scrollbars(theme.tabsetScrollbarColor, theme.tabsetScrollbarBackgroundColor, theme.tabsetScrollbarWidth)}
    }
  `}
`;
export default TabsStyle;
