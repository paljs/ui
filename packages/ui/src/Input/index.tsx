/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React from 'react';
import { Shape, Status, Size } from '../types';
import { ThemeKey } from '@paljs/theme';
import { componentAnimation } from '../utils';

const GroupStyle = styled.div<InputGroupProps>`
  ${({ theme, size, status, shape, fullWidth }) => {
    return css`
      display: flex;
      min-width: 0;
      position: relative;

      input,
      textarea {
        border-style: ${theme.inputBorderStyle};
        border-width: ${theme.inputBorderWidth};
        font-family: ${theme.inputTextFontFamily};
        -webkit-appearance: none;

        ${componentAnimation('border, background-color, color, box-shadow')}
        
        ${fullWidth && 'width: 100%;'}

        &::placeholder {
          font-family: ${theme.inputPlaceholderTextFontFamily};
          text-overflow: ellipsis;
        }
        
        &:focus {
          outline: none;
        }
      
        ${
          status &&
          css`
            background-color: ${theme[`input${status}BackgroundColor` as ThemeKey]};
            border-color: ${theme[`input${status}BorderColor` as ThemeKey]};
            color: ${theme[`input${status}TextColor` as ThemeKey]};

            &::placeholder {
              color: ${theme[`input${status}PlaceholderTextColor` as ThemeKey]};
            }

            &:focus {
              background-color: ${theme[`input${status}FocusBackgroundColor` as ThemeKey]};
              border-color: ${theme[`input${status}FocusBorderColor` as ThemeKey]};
            }
            &:hover {
              background-color: ${theme[`input${status}HoverBackgroundColor` as ThemeKey]};
              border-color: ${theme[`input${status}HoverBorderColor` as ThemeKey]};
            }

            &:disabled {
              background-color: ${theme[`input${status}DisabledBackgroundColor` as ThemeKey]};
              border-color: ${theme[`input${status}DisabledBorderColor` as ThemeKey]};
              color: ${theme[`input${status}DisabledTextColor` as ThemeKey]};

              &::placeholder {
                color: ${theme[`input${status}DisabledPlaceholderTextColor` as ThemeKey]};
              }
            }
          `
        }

        ${
          shape &&
          css`
            border-radius: ${theme[`input${shape}BorderRadius` as ThemeKey]};
          `
        }

        ${
          size &&
          css`
            font-size: ${theme[`input${size}TextFontSize` as ThemeKey]};
            font-weight: ${theme[`input${size}TextFontWeight` as ThemeKey]};
            line-height: ${theme[`input${size}TextLineHeight` as ThemeKey]};
            padding: ${theme[`input${size}Padding` as ThemeKey]};

            ${!fullWidth && `max-width: ${theme[`input${size}MaxWidth` as ThemeKey]};`}

            &::placeholder {
              font-size: ${theme[`input${size}PlaceholderTextFontSize` as ThemeKey]};
              font-weight: ${theme[`input${size}PlaceholderTextFontWeight` as ThemeKey]};
              line-height: ${theme[`input${size}PlaceholderTextLineHeight` as ThemeKey]};
            }
          `
        }
      }
    `;
  }}
`;

export interface InputGroupProps {
  shape?: Shape;
  fullWidth?: boolean;
  size?: Size;
  status?: Status;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const InputGroup: React.FC<InputGroupProps> = (props) => {
  return <GroupStyle {...props}>{props.children}</GroupStyle>;
};

InputGroup.defaultProps = {
  size: 'Medium',
  shape: 'Rectangle',
  status: 'Basic',
};
