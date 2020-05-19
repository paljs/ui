/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';

const modalMove = css`
  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s;

    button {
      position: absolute;
      top: 3rem;
      font-size: 2.5rem;
      opacity: 0;
      transition: opacity 0.5s;
      ${({ theme }) => (theme.dir === 'rtl' ? 'left' : 'right')}: 3rem;
    }

    .form {
      margin: 5rem 0;
      opacity: 0;
      transform: scale3d(0.8, 0.8, 1);
      transition: opacity 0.5s, transform 0.5s;
    }

    input {
      font-size: 10vw;
      width: 75%;
      transform: scale3d(0, 1, 1);
      transform-origin: 0 50%;
      transition: transform 0.3s;
    }
  }

  &.show {
    .search {
      pointer-events: auto;
      opacity: 1;

      button {
        opacity: 1;
      }

      .form {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }

      input {
        transform: scale3d(1, 1, 1);
        transition-duration: 0.5s;
      }
    }
  }

  @media screen and (max-width: 40rem) {
    span {
      text-align: left;
    }
  }
`;
export default modalMove;
