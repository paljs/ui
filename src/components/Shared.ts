import { css } from '../theme/styled-components';
import { ThemeKeys } from '../theme/themeTypes';

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
