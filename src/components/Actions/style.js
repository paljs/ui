/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

/* eslint-disable indent */

const ActionsStyle = styled.div`
  ${({ theme, customCss }) => css`
    font-size: ${theme.actionsFontSize};
    font-family: ${theme.actionsFontFamily};
    line-height: ${theme.actionsLineHeight};
    display: flex;
    align-items: center;
    ${customCss}
  `}
`;

const ActionStyle = styled.div`
  ${({ theme, fullWidth, disabled, size, inverse }) => css`
      padding: 0 ${theme.actionsPadding};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      position: relative;
      ${fullWidth &&
        css`
          justify-content: center;
          width: 100%;
        `}

      &:first-child {
        ${
          theme.dir === 'rtl'
            ? 'border-right: none !important;'
            : 'border-left: none !important;'
        }
      }

      a.icon-container {
        &:hover,
        &:focus {
          text-decoration: none;
        }
      }

      i.control-icon {
        &:hover {
          cursor: pointer;
        }
        color: ${theme.actionsFg};
      }

      ${size &&
        css`
          height: ${theme[`actionsSize${size}`]};
          i.control-icon {
            font-size: ${theme[`actionsSize${size}`]};
          }
        `}

        ${disabled &&
          css`
            & > * {
              opacity: 0.5;
            }
            cursor: not-allowed;

            a,
            i {
              cursor: not-allowed !important;
            }
          `}
        ${inverse &&
          css`
            i.control-icon {
              color: ${theme.actionsBg};
            }

            border-${theme.dir === 'rtl' ? 'right' : 'left'}: 1px solid 
            ${theme.actionsSeparator};
          `}
        
      border-${theme.dir === 'rtl' ? 'right' : 'left'}: 1px solid 
      ${theme.actionsSeparator};
      background: transparent;
`}
`;

export { ActionsStyle, ActionStyle };
