/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { adjustHue } from 'polished';

/* eslint-disable indent */
const TabsStyle = styled.div`
  ${({ theme, fullWidth }) => css`
    display: block;
    .tabs {
      font-family: ${theme.tabsFontFamily};
      font-size: ${theme.tabsFontSize};
      padding: 0 ${theme.tabsPadding};
      border-bottom: 1px solid ${theme.tabsSeparator};
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      ${fullWidth && 'justify-content: space-around;'}

      .tab {
        background: ${theme.tabsHeaderBg};
        cursor: pointer;
        margin-bottom: -1px;
        text-align: center;
        position: relative;
        &.active a::before {
          display: block;
        }
        a {
          padding: ${theme.tabsPadding};
          color: ${theme.tabsFg};
          display: flex;
          align-items: center;
          position: relative;
          text-decoration: none;
          &:hover {
            color: ${theme.tabsFgHeading};
          }

          &::before {
            display: none;
            position: absolute;
            content: '';
            width: 100%;
            height: 6px;
            border-radius: 3px;
            bottom: -2px;
            left: 0;
            background: ${theme.tabsSelected};
            background-image: linear-gradient(
              to right,
              ${adjustHue(
                theme.tabsSelectedDegrees,
                theme.tabsSelectedSecondColor
              )},
              ${theme.tabsSelected}
            );
          }
          i {
            font-size: 1.5rem;
          }

          i + span {
            ${({ theme }) => css`
              ${theme.dir === 'rtl'
                ? 'margin-right: 0.5rem;'
                : 'margin-left: 0.5rem;'}
            `}
          }
        }

        &.active {
          background: ${theme.tabsActiveBg};

          a {
            font-weight: ${theme.tabsActiveFontWeight};
            color: ${theme.tabsFgHeading};
          }
        }

        &.responsive {
          @media screen and (max-width: ${theme.tabsIconOnlyMaxWidth}) {
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
      font-family: ${theme.tabsContentFontFamily};
      font-size: ${theme.tabsContentFontSize};
      color: ${theme.tabsFgText};
      background-color: ${theme.tabsBg};
      padding: ${theme.tabsContentPadding};
    }
  `}
`;
export default TabsStyle;
