/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { colorState, cardSize } from '../types';

const headerBg = css`
  ${({ theme, status }) => {
    if (status) {
      return css`
        background-color: ${theme['cardHeader' + status + 'Bg']};
        border-bottom-width: ${theme.cardHeaderBorderWidth};
        border-bottom-style: ${theme.cardHeaderBorderType};
        border-bottom-color: ${theme['cardHeader' + status + 'Bg']};
        border-top-left-radius: ${theme.cardBorderRadius};
        border-top-right-radius: ${theme.cardBorderRadius};
      `;
    } else {
      return css`
        border-bottom-width: ${theme.cardHeaderBorderWidth};
        border-bottom-style: ${theme.cardHeaderBorderType};
        border-bottom-color: ${theme.cardHeaderBorderColor};
      `;
    }
  }};
  ${({ accent }) => (accent ? 'border-radius: 0' : '')};
`;

const accent = css`
  ${({ theme, accent }) =>
    accent
      ? `
      border-top:
      ${theme.cardBorderRadius} 
      solid
      ${theme['cardHeader' + accent + 'Bg']};
      `
      : ''};
`;
const height = css`
  ${({ theme, size }) =>
    size
      ? `
      height: ${theme['cardHeight' + size.toUpperCase()]};
      `
      : ''};
`;
const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    line-height: ${theme.cardLineHeight};
    font-weight: ${theme.cardFontWeight};
    font-size: ${theme.cardFontSize};
    color: ${theme.cardFgText};
    background: ${theme.cardBg};
    box-shadow: ${theme.cardShadow};
    border-radius: ${theme.cardBorderRadius};
    margin-bottom: ${theme.cardMargin};
    border-width: ${theme.cardBorderWidth};
    border-style: ${theme.cardBorderType};
    border-color: ${theme.cardBorderColor};
    ${accent}
    ${height}
    & > header {
      font-family: ${theme.cardHeaderFontFamily};
      font-size: ${theme.cardHeaderFontSize};
      font-weight: ${theme.cardHeaderFontWeight};
      color: ${theme.cardHeaderFgHeading};
      padding: ${theme.cardPadding};
      ${headerBg}
    }
    .card-body {
      padding: ${theme.cardPadding};
      overflow: auto;
      flex: 1;
      position: relative;
    }
    & > footer {
      padding: ${theme.cardPadding};
      border-top: 1px solid ${theme.cardSeparator};
      border-bottom-left-radius: ${theme.cardBorderRadius};
      border-bottom-right-radius: ${theme.cardBorderRadius};
    }
  `};
`;
Card.propTypes = {
  status: colorState,
  accent: colorState,
  size: cardSize
};
export default Card;
