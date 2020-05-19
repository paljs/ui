/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';

const rotateLayout = css`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 0.4s;

  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1050;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

    button {
      position: absolute;
      top: 3rem;
      font-size: 2.5rem;
      opacity: 0;
      transform: scale3d(0.8, 0.8, 1);
      transition: opacity 0.5s, transform 0.5s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      ${({ theme }) => (theme.dir === 'rtl' ? 'left' : 'right')}: 3rem;
    }

    .form {
      margin: 5rem 0;
      opacity: 0;
      transform: scale3d(0.7, 0.7, 1);
      transition: opacity 0.5s, transform 0.5s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    input {
      font-size: 7vw;
      width: 75%;
    }
  }

  &.show {
    opacity: 1;
    transition-delay: 0s;

    .search {
      pointer-events: auto;
      opacity: 1;

      button {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }

      .form {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  }
`;
export default rotateLayout;
