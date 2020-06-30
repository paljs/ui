/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { Status, Size } from '../types';
import { getHeadings, scrollbars } from '../utils';
import { ThemeKey } from '@paljs/theme';
import React from 'react';

interface CardProps {
  status?: Status;
  accent?: Status;
  size?: Size;
  style?: React.CSSProperties;
  className?: string;
}

const CardFooter = styled.footer``;

const headerBg = css<CardProps>`
  ${({ theme, status, accent }) => css`
    padding: ${theme.cardPadding};
    border-bottom: ${theme.cardDividerWidth} ${theme.cardDividerStyle} ${theme.cardDividerColor};
    border-top-left-radius: ${theme.cardBorderRadius};
    border-top-right-radius: ${theme.cardBorderRadius};
    color: ${theme.cardHeaderTextColor};
    font-family: ${theme.cardHeaderTextFontFamily};
    font-size: ${theme.cardHeaderTextFontSize};
    font-weight: ${theme.cardHeaderTextFontWeight};
    line-height: ${theme.cardHeaderTextLineHeight};

    ${getHeadings}

    ${
      status &&
      css`
        background-color: ${theme[`cardHeader${status}BackgroundColor` as ThemeKey]};
        border-bottom-color: ${theme[`cardHeader${status}BackgroundColor` as ThemeKey]};
        border-bottom-width: 0;
        color: ${theme[`cardHeader${status}TextColor` as ThemeKey]};
        a,
        a:hover {
          color: ${theme[`cardHeader${status}TextColor` as ThemeKey]};
        }
      `
    }
    ${accent && 'border-radius: 0;'}
  `}
`;

const CardStyle = styled.div<CardProps>`
  ${({ theme, accent, size }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.cardBackgroundColor};
    border: ${theme.cardBorderWidth} ${theme.cardBorderStyle} ${theme.cardBorderColor};
    border-radius: ${theme.cardBorderRadius};
    box-shadow: ${theme.cardShadow};
    color: ${theme.cardTextColor};
    font-family: ${theme.cardTextFontFamily};
    font-size: ${theme.cardTextFontSize};
    font-weight: ${theme.cardTextFontWeight};
    line-height: ${theme.cardTextLineHeight};
    margin-bottom: ${theme.cardMarginBottom};

    ${scrollbars(theme.cardScrollbarColor, theme.cardScrollbarBackgroundColor, theme.cardScrollbarWidth)}

    ${
      accent &&
      css`
        border-top-color: ${theme[`cardHeader${accent}BackgroundColor` as ThemeKey]};
        border-top-style: ${theme.cardBorderStyle};
        border-top-width: ${theme.cardBorderRadius};
      `
    }

    ${
      size &&
      css`
        height: ${theme[`cardHeight${size}` as ThemeKey]};
      `
    }

    & > header {
      ${headerBg}
    }
    
    ${CardFooter},
    & > footer {
      padding: ${theme.cardPadding};
      border-top: ${theme.cardDividerWidth} ${theme.cardDividerStyle} ${theme.cardDividerColor};
      border-bottom-left-radius: ${theme.cardBorderRadius};
      border-bottom-right-radius: ${theme.cardBorderRadius};
    }
  `};
`;

const CardHeader = styled.header`
  ${headerBg}
`;

const CardBody = styled.div`
  ${({ theme }) => css`
    padding: ${theme.cardPadding};
    overflow: auto;
    flex: 1;
    -ms-flex: 1 1 auto;
    position: relative;
    ${scrollbars(theme.cardScrollbarColor, theme.cardScrollbarBackgroundColor, theme.cardScrollbarWidth)}
  `}
`;

const Card: React.FC<CardProps> = (props) => <CardStyle {...props}>{props.children}</CardStyle>;

export { Card, CardHeader, CardFooter, CardBody, CardStyle };
