/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { outlineShadow } from '../utils';
import { Option } from './index';
import { ThemeKey } from '@paljs/theme';

const RadioStyle = styled.label<Partial<Option>>`
  ${({ theme, status }) => css`
    display: block;
    position: relative;
    label {
      display: inline-flex;
      margin: 0;
      min-height: inherit;
      padding: 0.375rem 0;
      padding-${theme.dir === 'rtl' ? 'left' : 'right'}: 1.5rem;
      align-items: center;
    }

    .outer-circle,
    .inner-circle {
      border-radius: 50%;
      position: absolute;
      top: 50%;
      ${theme.dir === 'rtl' ? 'right' : 'left'}: 0;
      transform: translateY(-50%);
      height: ${theme.radioHeight};
      width: ${theme.radioWidth};
    }

    .inner-circle {
      transform: translateY(-50%) scale(0.65);
    }

    .outer-circle {
      border-style: ${theme.radioBorderStyle};
      border-width: ${theme.radioBorderWidth};
    }

    .native-input:enabled:focus + .outer-circle {
      ${outlineShadow(theme.radioOutlineWidth, theme.radioOutlineColor)}
    }

    .text {
      font-family: ${theme.radioTextFontFamily};
      font-size: ${theme.radioTextFontSize};
      font-weight: ${theme.radioTextFontWeight};
      line-height: ${theme.radioTextLineHeight};
      margin-${theme.dir === 'rtl' ? 'right' : 'left'}: ${theme.radioWidth};
      padding-${theme.dir === 'rtl' ? 'right' : 'left'}: 0.5rem;
    }

    ${
      status &&
      css`
        .native-input:enabled + .outer-circle {
          background-color: ${theme[`radio${status}BackgroundColor` as ThemeKey]};
          border-color: ${theme[`radio${status}BorderColor` as ThemeKey]};
        }

        .native-input:enabled:checked {
          & + .outer-circle {
            background-color: ${theme[`radio${status}CheckedBackgroundColor` as ThemeKey]};
            border-color: ${theme[`radio${status}CheckedBorderColor` as ThemeKey]};
          }
          & ~ .inner-circle {
            background-color: ${theme[`radio${status}InnerCircleColor` as ThemeKey]};
          }
        }

        .native-input:enabled:focus + .outer-circle {
          border-color: ${theme[`radio${status}FocusBorderColor` as ThemeKey]};
        }
        .native-input:enabled:checked:focus ~ .inner-circle {
          background-color: ${theme[`radio${status}FocusInnerCircleColor` as ThemeKey]};
        }

        &:hover .native-input:enabled + .outer-circle {
          background-color: ${theme[`radio${status}HoverBackgroundColor` as ThemeKey]};
          border-color: ${theme[`radio${status}HoverBorderColor` as ThemeKey]};
        }
        &:hover .native-input:checked:enabled {
          + .outer-circle {
            background-color: ${theme[`radio${status}HoverCheckedBackgroundColor` as ThemeKey]};
          }
          ~ .inner-circle {
            background-color: ${theme[`radio${status}HoverInnerCircleColor` as ThemeKey]};
          }
        }

        .native-input:enabled:active + .outer-circle {
          border-color: ${theme[`radio${status}ActiveBorderColor` as ThemeKey]};
        }
        .native-input:enabled:checked:active ~ .inner-circle {
          background-color: ${theme[`radio${status}ActiveInnerCircleColor` as ThemeKey]};
        }

        .text {
          color: ${theme[`radio${status}TextColor` as ThemeKey]};
        }

        .native-input:disabled {
          & + .outer-circle {
            background-color: ${theme[`radio${status}DisabledBackgroundColor` as ThemeKey]};
            border-color: ${theme[`radio${status}DisabledBorderColor` as ThemeKey]};
          }
          & ~ .text {
            color: ${theme[`radio${status}DisabledTextColor` as ThemeKey]};
          }

          &:checked {
            & + .outer-circle {
              background-color: ${theme[`radio${status}DisabledCheckedBackgroundColor` as ThemeKey]};
              border-color: ${theme[`radio${status}DisabledCheckedBorderColor` as ThemeKey]};
            }
            ~ .inner-circle {
              background-color: ${theme[`radio${status}DisabledCheckedInnerCircleColor` as ThemeKey]};
            }
          }
        }
      `
    }
    `}
`;

export default RadioStyle;
