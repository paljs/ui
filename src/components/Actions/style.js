/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const ActionsStyle = styled.div`
	${({ theme, customCss }) => css`
		background-color: ${theme.actionsBackgroundColor};
		color: ${theme.actionsTextColor};
		font-family: ${theme.actionsTextFontFamily};
		font-weight: ${theme.actionsTextFontWeight};
		line-height: ${theme.actionsTextLineHeight};
		display: flex;
		align-items: center;
		${customCss}
	`}
`;

const ActionStyle = styled.div`
	${({ theme, fullWidth, disabled, size, inverse }) => css`
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
        color: ${theme.actionsIconColor};
      }

      ${size &&
				css`
					font-size: ${theme[`actions${size}TextFontSize`]};
					height: ${theme[`actions${size}Height`]};
					padding: ${theme[`actions${size}Padding`]};
					i.control-icon {
						font-size: ${theme[`actions${size}IconHeight`]};
					}
				`}

        ${disabled &&
					css`
						& > * {
							opacity: 0.5;
						}
						cursor: not-allowed;
						color: ${theme.actionsDisabledTextColor} a, i {
							cursor: not-allowed !important;
							color: ${theme.actionsDisabledIconColor};
						}
					`}
        ${inverse &&
					css`
            i.control-icon {
              color: ${theme.actionsBg};
            }

            border-${theme.dir === 'rtl' ? 'right' : 'left'}: 
            ${theme.actionsDividerWidth} ${theme.actionsDividerStyle} ${theme.actionsDividerColor}; 
          `}
        
      border-${theme.dir === 'rtl' ? 'right' : 'left'}: ${theme.actionsDividerWidth} ${theme.actionsDividerStyle} ${theme.actionsDividerColor}; 
      background: transparent;
`}
`;

export { ActionsStyle, ActionStyle };
