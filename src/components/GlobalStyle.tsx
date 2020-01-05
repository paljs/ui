/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';

const GlobalStyle = css`
  ${({ theme }) => css`
    html {
      box-sizing: border-box;
      font-size: 14px;
      direction: ${theme.dir && theme.dir};
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      padding: 0;
      text-align: ${theme.dir === 'rtl' ? 'right' : 'left'};
      -webkit-font-smoothing: antialiased;
    }
    #oah-layout.with-search .scrollable-container {
      position: relative;
      z-index: 0;
    }
    #oah-layout.rotate-layout {
      position: fixed;
      overflow: hidden;
      width: 100%;

      .scrollable-container {
        position: relative;
        z-index: 10001;

        transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
      }

      &.with-search .scrollable-container {
        transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        transform-origin: 50vw 50vh;
        transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);
        pointer-events: none;
      }
    }
    #oah-layout.column-curtain.with-search .layout {
      pointer-events: none;
    }
    #oah-layout.curtain .scrollable-container {
      position: relative;
      z-index: 0;
    }
    #oah-layout.modal-drop {
      .layout {
        position: relative;
        transition: transform 0.4s, opacity 0.4s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      &.with-search .layout {
        opacity: 0;
        transform: scale3d(0.9, 0.9, 1);
        pointer-events: none;
      }
    }

    #oah-layout.modal-half {
      .layout {
        transition: transform 0.6s, opacity 0.6s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      &.with-search {
        .layout {
          transform: scale3d(0.8, 0.8, 1);
          pointer-events: none;
        }
      }
    }

    #oah-layout.modal-move {
      .layout {
        transition: transform 0.5s;
      }
      &.with-search {
        .layout {
          transform: scale3d(0.8, 0.8, 1);
          pointer-events: none;
        }
      }
    }
    .visually-hidden {
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    }
  `}
`;
export default GlobalStyle;
