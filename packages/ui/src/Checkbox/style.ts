/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { CheckboxStyleProps } from './index';
import { outlineShadow, componentAnimation } from '../utils';
import IconStyle from '../Icon/style';
import { ThemeKey } from '@paljs/theme';

const CheckboxStyle = styled.label<CheckboxStyleProps>`
  ${({ theme, checked, disabled, status, indeterminate }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    margin: 0;
    min-height: inherit;
    padding: ${theme.checkboxPadding};

    .custom-checkbox {
      width: ${theme.checkboxWidth};
      height: ${theme.checkboxHeight};
      border-style: ${theme.checkboxBorderStyle};
      border-width: ${theme.checkboxBorderWidth};
      border-radius: ${theme.checkboxBorderRadius};
      position: relative;
      flex-shrink: 0;
      ${componentAnimation('background-color, border, box-shadow')}
    }

    .native-input:focus:not(:checked) + .custom-checkbox {
      ${outlineShadow(theme.checkboxOutlineWidth, theme.checkboxOutlineColor, true)}
    }
    .native-input:focus:checked + .custom-checkbox {
      ${outlineShadow(theme.checkboxOutlineWidth, theme.checkboxOutlineColor)}
    }

    ${IconStyle} {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
    }
    .text {
      font-family: ${theme.checkboxTextFontFamily};
      font-size: ${theme.checkboxTextFontSize};
      font-weight: ${theme.checkboxTextFontWeight};
      line-height: ${theme.checkboxTextLineHeight};
      transition: color 0.15s ease-in;
      &:not(:empty) {
        padding-${theme.dir === 'rtl' ? 'right' : 'left'}: ${theme.checkboxTextSpace};
      }
    }

    ${
      status &&
      css`
        .custom-checkbox {
          background-color: ${theme[`checkbox${status}BackgroundColor` as ThemeKey]};
          border-color: ${theme[`checkbox${status}BorderColor` as ThemeKey]};
        }

        .text {
          color: ${theme[`checkbox${status}TextColor` as ThemeKey]};
        }

        ${checked &&
        css`
          .custom-checkbox {
            background-color: ${theme[`checkbox${status}CheckedBackgroundColor` as ThemeKey]};
            border-color: ${theme[`checkbox${status}CheckedBorderColor` as ThemeKey]};

            ${IconStyle} {
              color: ${theme[`checkbox${status}CheckedCheckmarkColor` as ThemeKey]};
            }
          }
        `}
        ${indeterminate &&
        css`
          .custom-checkbox {
            background-color: ${theme[`checkbox${status}IndeterminateBackgroundColor` as ThemeKey]};
            border-color: ${theme[`checkbox${status}IndeterminateBorderColor` as ThemeKey]};

            ${IconStyle} {
              color: ${theme[`checkbox${status}IndeterminateCheckmarkColor` as ThemeKey]};
            }
          }
        `}

        .native-input:enabled:focus + .custom-checkbox {
          background-color: ${theme[`checkbox${status}FocusBackgroundColor` as ThemeKey]};
          border-color: ${theme[`checkbox${status}FocusBorderColor` as ThemeKey]};

          ${(indeterminate || checked) &&
          css`
            background-color: ${theme[`checkbox${status}FocusCheckedBackgroundColor` as ThemeKey]};
            border-color: ${theme[`checkbox${status}FocusCheckedBorderColor` as ThemeKey]};
          `}
        }

        .custom-checkbox:hover {
          background-color: ${theme[`checkbox${status}HoverBackgroundColor` as ThemeKey]};
          border-color: ${theme[`checkbox${status}HoverBorderColor` as ThemeKey]};

          ${(indeterminate || checked) &&
          css`
            background-color: ${theme[`checkbox${status}HoverCheckedBackgroundColor` as ThemeKey]};
            border-color: ${theme[`checkbox${status}HoverCheckedBorderColor` as ThemeKey]};
          `}
        }

        .native-input:enabled:active + .custom-checkbox {
          background-color: ${theme[`checkbox${status}ActiveBackgroundColor` as ThemeKey]};
          border-color: ${theme[`checkbox${status}ActiveBorderColor` as ThemeKey]};

          ${(indeterminate || checked) &&
          css`
            background-color: ${theme[`checkbox${status}ActiveCheckedBackgroundColor` as ThemeKey]};
            border-color: ${theme[`checkbox${status}ActiveCheckedBorderColor` as ThemeKey]};
          `}
        }
        ${disabled &&
        css`
          .native-input:disabled {
            & + .custom-checkbox {
              background-color: ${theme[`checkbox${status}DisabledBackgroundColor` as ThemeKey]};
              border-color: ${theme[`checkbox${status}DisabledBorderColor` as ThemeKey]};

              ${IconStyle} {
                color: ${theme[`checkbox${status}DisabledCheckmarkColor` as ThemeKey]};
              }
            }
            & ~ .text {
              color: ${theme[`checkbox${status}DisabledTextColor` as ThemeKey]};
            }
            &:indeterminate + .custom-checkbox,
            &:checked + .custom-checkbox {
              background-color: ${theme[`checkbox${status}DisabledCheckedBackgroundColor` as ThemeKey]};
            }
          }
        `}
      `
    }
  `}
`;

export default CheckboxStyle;
