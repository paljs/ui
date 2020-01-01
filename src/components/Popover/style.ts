/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const PopoverStyle = styled.div`
  ${({ theme }) => css`
    border: ${theme.popoverBorderWidth} solid ${theme.popoverBorderColor};
    border-radius: ${theme.popoverBorderRadius};
    background: ${theme.popoverBackgroundColor};
    box-shadow: ${theme.popoverShadow};
    color: ${theme.popoverTextColor};

    .primitive-overlay {
      font-family: ${theme.popoverTextFontFamily};
      font-size: ${theme.popoverTextFontSize};
      font-weight: ${theme.popoverTextFontWeight};
      line-height: ${theme.popoverTextLineHeight};
      padding: ${theme.popoverPadding};
    }

    .arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-left: ${theme.popoverArrowSize} solid transparent;
      border-right: ${theme.popoverArrowSize} solid transparent;
      border-bottom: ${theme.popoverArrowSize} solid ${theme.popoverBorderColor};

      &::after {
        position: absolute;
        content: ' ';
        width: 0;
        height: 0;
        top: 3px;
        left: calc(50% - ${theme.popoverArrowSize});
        border-left: ${theme.popoverArrowSize} solid transparent;
        border-right: ${theme.popoverArrowSize} solid transparent;
        border-bottom: ${theme.popoverArrowSize} solid ${theme.popoverBackgroundColor};
        clip-path: inset(0 0 2px);
      }
    }
  `}
`;

export default PopoverStyle;
