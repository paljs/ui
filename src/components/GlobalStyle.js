/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
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
    *::-webkit-scrollbar {
      width: ${theme.scrollbarWidth};
      height: ${theme.scrollbarWidth};
    }

    *::-webkit-scrollbar-thumb {
      background: ${theme.scrollbarFg};
      cursor: pointer;
      border-radius: ${theme.scrollbarThumbRadius};
    }

    *::-webkit-scrollbar-track {
      background: ${theme.scrollbarBg};
    }
  `}
`;
export default GlobalStyle;
