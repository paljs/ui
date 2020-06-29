import styled, { css } from 'styled-components';
import { ThemeKey } from '../../theme';
import { Status } from '../types';

export default styled.div<{ status?: Status }>`
  ${({ theme, status }) => css`
    font-size: ${theme.iconFontSize};
    line-height: ${theme.iconLineHeight};
    width: ${theme.iconWidth};
    height: ${theme.iconHeight};
    display: inline-block;
    svg {
      vertical-align: ${theme.iconSvgVerticalAlign};
    }
    ${status && `color: ${theme[`icon${status}Color` as ThemeKey]};`}
  `}
`;
