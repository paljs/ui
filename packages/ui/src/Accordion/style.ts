/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { getHeadings } from '../utils';

const AccordionStyle = styled.div`
  ${({ theme }) => css`
    display: block;
    box-shadow: ${theme.accordionShadow};
    border-radius: ${theme.accordionBorderRadius};
  `}
`;

const ItemStyle = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.accordionItemBackgroundColor};
    color: ${theme.accordionItemTextColor};
    font-family: ${theme.accordionItemTextFontFamily};
    font-size: ${theme.accordionItemTextFontSize};
    font-weight: ${theme.accordionItemTextFontWeight};
    line-height: ${theme.accordionItemTextLineHeight};

    display: flex;
    flex-direction: column;

    & > header {
      position: relative;
      padding: ${theme.accordionPadding};
      border-bottom-width: ${theme.accordionHeaderBorderWidth};
      border-bottom-style: ${theme.accordionHeaderBorderStyle};
      border-bottom-color: ${theme.accordionHeaderBorderColor};
      color: ${theme.accordionHeaderTextColor};

      font-family: ${theme.accordionHeaderTextFontFamily};
      font-size: ${theme.accordionHeaderTextFontSize};
      font-weight: ${theme.accordionHeaderTextFontWeight};
      line-height: ${theme.accordionHeaderTextLineHeight};

      ${getHeadings};

      display: flex;
      align-items: center;
      cursor: pointer;

      &:focus {
        outline: 0;
      }

      .expansion-indicator {
        position: absolute;
        ${theme.dir === 'rtl' ? 'left' : 'right'}: 1rem;
      }
    }

    &.disabled > header {
      color: ${theme.accordionHeaderDisabledTextColor};
      cursor: default;
    }

    &:first-child {
      border-top-left-radius: ${theme.accordionBorderRadius};
      border-top-right-radius: ${theme.accordionBorderRadius};
    }
    &:last-child {
      border-bottom-left-radius: ${theme.accordionBorderRadius};
      border-bottom-right-radius: ${theme.accordionBorderRadius};

      &.collapsed > header {
        border-bottom: none;
      }
    }
    &:not(.collapsed) + & > header {
      border-top-width: ${theme.accordionHeaderBorderWidth};
      border-top-style: ${theme.accordionHeaderBorderStyle};
      border-top-color: ${theme.accordionHeaderBorderColor};
    }
    .item-body {
      flex: 1;
      -ms-flex: 1 1 auto;
      overflow: auto;
      padding: ${theme.accordionPadding};
      position: relative;
    }
    .collapsed {
      overflow: hidden;
      max-height: 0;
      transition: all 0.5s cubic-bezier(0, 1, 0.3, 1) -100ms;
    }
    .expanded {
      max-height: 1500px;
      transition: all 0.5s cubic-bezier(1, 0.15, 1, 1);
    }
  `}
`;

export { ItemStyle, AccordionStyle };
