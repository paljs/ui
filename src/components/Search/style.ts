/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

import columnCurtain from './column-curtain';
import curtain from './curtain';
import modalDrop from './modal-drop';
import modalMove from './modal-move';
import modalHalf from './modal-half';
import modalZoomin from './modal-zoomin';
import rotateLayout from './rotate-layout';

const SearchStyle = styled.div`
  button {
    margin: 0 auto;
    padding: 0;
    cursor: pointer;
    border: none;
    background: none;

    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
`;

const SearchFieldStyle = styled.div`
  ${({ theme }) => css`
    .search {
      background: ${theme.searchBackgroundColor};

      button {
        font-size: 2rem;
        margin: 0 auto;
        padding: 0;
        cursor: pointer;
        border: none;
        background: none;

        &:focus {
          box-shadow: none;
          outline: none;
        }
      }

      span {
        color: ${theme.searchInfoTextColor};
        font-family: ${theme.searchInfoTextFontFamily};
        font-size: ${theme.searchInfoTextFontSize};
        font-weight: ${theme.searchInfoTextFontWeight};
        line-height: ${theme.searchInfoTextLineHeight};
        display: block;
        width: 75%;
        margin: 0 auto;
        padding: 0.85rem 0;
        text-align: right;
      }

      input {
        border-bottom: ${theme.searchDividerWidth} ${theme.searchDividerStyle} ${theme.searchDividerColor};
        color: ${theme.searchTextColor};
        font-family: ${theme.searchTextFontFamily};
        font-size: ${theme.searchTextFontSize};
        font-weight: ${theme.searchTextFontWeight};
        line-height: ${theme.searchTextLineHeight};
        border-top: 0;
        border-right: 0;
        border-left: 0;
        background: transparent;
        border-radius: 0;
        display: inline-block;
        box-sizing: border-box;
        padding: 0.05rem 0;
        -webkit-appearance: none;

        &::placeholder {
          color: ${theme.searchPlaceholderTextColor};
          opacity: 0.3;
        }
        &:focus {
          outline: none;
        }

        &::-ms-clear {
          display: none;
        }
      }
    }

    &.rotate-layout {
      background: ${theme.searchBackgroundColor};
      ${rotateLayout}
    }

    &.modal-zoomin {
      ${modalZoomin}
      .search::before,
      .search::after {
        border: 1.5rem solid ${theme.searchExtraBackgroundColor};
      }
    }

    &.modal-half {
      ${modalHalf}
      .form-wrapper {
        background: ${theme.searchBackgroundColor};
      }
      .search::before {
        background: ${theme.searchExtraBackgroundColor};
      }
    }
    &.modal-move {
      ${modalMove}
    }

    &.modal-drop {
      .form-content::after {
        background: ${theme.searchDividerColor};
      }
      .search::before {
        background: ${theme.searchBackgroundColor};
      }
      ${modalDrop}
    }

    &.curtain {
      ${curtain}
      .search::after {
        background: ${theme.searchBackgroundColor};
      }
      .search {
        background: ${theme.searchBackgroundColor};
      }
    }

    &.column-curtain {
      ${columnCurtain}
      &::before {
        background: ${theme.searchBackgroundColor};
      }
      &::after {
        background: transparent;
      }
      &.show::after {
        background: ${theme.searchExtraBackgroundColor};
      }
    }
  `}
`;

export { SearchStyle, SearchFieldStyle };
