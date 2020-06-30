/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { Status } from '../types';
import { ThemeKey } from '@paljs/theme';

interface TooltipStyleProps {
  status?: Status;
  arrowSize: string;
}

const TooltipStyle = styled.div<TooltipStyleProps>`
  ${({ theme, status, arrowSize }) => css`
    box-shadow: ${theme.tooltipShadow};
    background: ${theme.tooltipBackgroundColor};
    border: ${theme.tooltipBorderWidth} ${theme.tooltipBorderStyle} ${theme.tooltipBorderColor};
    border-radius: ${theme.tooltipBorderRadius};
    padding: ${theme.tooltipPadding};
    max-width: ${theme.tooltipMaxWidth};
    z-index: 10000;
    .content {
      display: flex;
      align-items: center;
      color: ${theme.tooltipTextColor};
      font-family: ${theme.tooltipTextFontFamily};
      font-size: ${theme.tooltipTextFontSize};
      font-weight: ${theme.tooltipTextFontWeight};
      line-height: ${theme.tooltipTextLineHeight};
    }

    .arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: ${arrowSize} ${theme.tooltipBorderStyle} ${theme.tooltipBackgroundColor};
      border-left: ${arrowSize} solid transparent;
      border-right: ${arrowSize} solid transparent;
    }

    .icon:only-child {
      height: ${theme.tooltipIconHeight};
      width: ${theme.tooltipIconWidth};
    }
    .icon:not(:only-child) {
      height: ${theme.tooltipTextFontSize};
      width: ${theme.tooltipTextFontSize};
    }

    span {
      line-height: 1.25rem;
    }

    ${status &&
    css`
      background: ${theme[`tooltip${status}BackgroundColor` as ThemeKey]};
      border-color: ${theme[`tooltip${status}BorderColor` as ThemeKey]};

      .arrow {
        border-bottom-color: ${theme[`tooltip${status}BackgroundColor` as ThemeKey]};
      }

      .content {
        color: ${theme[`tooltip${status}TextColor` as ThemeKey]};
      }
    `}
  `}
`;

export default TooltipStyle;
