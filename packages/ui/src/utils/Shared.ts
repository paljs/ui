/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';
import { ThemeKeys } from '@paljs/theme';

export const getHeadings = css`
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
  h5 {
    margin: 0;
  }
  h6 {
    margin: 0;
  }
`;

export const scrollbars = (fg: ThemeKeys, bg: ThemeKeys, size: ThemeKeys) => {
  const borderRadius = parseFloat(size as string) / 2;
  return css`
    &::-webkit-scrollbar {
      width: ${size};
      height: ${size};
    }

    &::-webkit-scrollbar-thumb {
      background: ${fg};
      cursor: pointer;
      border-radius: ${borderRadius};
    }

    &::-webkit-scrollbar-track {
      background: ${bg};
    }
  `;
};

export const componentAnimation = (properties: string) => {
  return css`
    transition-duration: 0.15s;
    transition-property: ${properties};
    transition-timing-function: ease-in;
  `;
};

export const outlineShadow = (width: ThemeKeys, color: ThemeKeys, insetShadow = false) => {
  const outsetShadow = `0 0 0 ${width} ${color}`;
  return css`
    box-shadow: ${outsetShadow};
    ${insetShadow &&
    css`
      &:not(:hover):not(:active) {
        box-shadow: ${outsetShadow}, inset 0 0 0 100vmax ${({ theme }) => theme.buttonOutlineColor};
      }
    `}
  `;
};
