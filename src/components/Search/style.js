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
  ${({ theme }) => css`
    button {
      path {
        fill: ${theme.searchBtnOpenFg};
      }
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
  `}
`;

const SearchFieldStyle = styled.div`
  ${({ theme }) => css`
  
    .search {
      background: ${theme.searchBg};

      button {
        g {
          fill: ${theme.searchBtnCloseFg};
        }
        margin: 0;
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
        color: ${theme.searchInfo};
        font-size: 90%;
        font-weight: bold;
        display: block;
        width: 75%;
        margin: 0 auto;
        padding: 0.85rem 0;
        text-align: right;
      }

      input {
        color: ${theme.searchText};
        border-bottom: 4px solid ${theme.searchDash};
        border-top: 0;
        border-right: 0;
        border-left: 0;
        background: transparent;
        border-radius: 0;
        line-height: 1;
        display: inline-block;
        box-sizing: border-box;
        padding: 0.05rem 0;
        -webkit-appearance: none;

        &::placeholder {
          color: ${theme.searchPlaceholder};
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
      ${rotateLayout}
      background: ${theme.searchBg};
    }

    &.modal-zoomin {
      ${modalZoomin}
      .search::before,
      .search::after {
        border: 1.5rem solid ${theme.searchBgSecondary};
      }
    }

    &.modal-half {
      ${modalHalf}
      .form-wrapper {
        background: ${theme.searchBg};
      }
      .search::before {
        background: ${theme.searchBgSecondary};
      }
    }
    &.modal-move {
      ${modalMove}
    }

    &.modal-drop {
      .form-content::after {
        background: ${theme.searchDash};
      }
      .search::before {
        background: ${theme.searchBg};
      }
      ${modalDrop}
    }

    &.curtain {
      ${curtain}
      .search::after {
        background: ${theme.searchBg};
      }
      .search {
        background: ${theme.searchBg};
      }
    }

    &.column-curtain {
      ${columnCurtain}
      &::before {
        background: ${theme.searchBg};
      }
      &::after {
        background: transparent;
      }
      &.show::after {
        background: ${theme.searchBgSecondary};
      }
    }
  `}
`;

export { SearchStyle, SearchFieldStyle };
