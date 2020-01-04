/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React from 'react';
import { Shape, Status, Size } from '../types';
import { ThemeKey } from '../../theme';
import { componentAnimation } from '../Shared';

const GroupStyle = styled.div<InputGroupProps>`
  ${({ theme, size, status, shape, fullWidth }) => {
    const padding = (theme[`input${size}Padding` as ThemeKey] as string).split(' ');
    return css`
      display: flex;
      min-width: 0;
      position: relative;
      margin-bottom: 1rem;
      
      .label {
        ${theme.dir === 'rtl' ? 'right' : 'left'}: 0;
        top: 0;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
        transform-origin: top ${theme.dir === 'rtl' ? 'right' : 'left'};
        pointer-events: none;
        position: absolute;
        padding: 0 5px;
        transform: translate(
          ${theme.dir === 'rtl' && '-'}${padding[1]}, 
          calc(${padding[0]} + ${theme.inputBorderWidth})
        );
      }

      input,
      textarea {
        &:not([disabled]):focus ~ .label,
        &[value]:not([value=""]) ~ .label,
        &:-webkit-autofill ~ .label {
          transform: scale(.90) translate(
            ${theme.dir === 'rtl' && '-'}${padding[1]}, 
            -50%
          );
        }
        &:not([disabled]):focus ~ .label{
          color: ${theme[`input${status}PlaceholderTextColor` as ThemeKey]};
        }
        &[value]:not([value=""]) ~ .label,
        &:-webkit-autofill ~ .label{
          color: ${theme[`input${status}PlaceholderTextColor` as ThemeKey]};
        }
      }

      input,
      textarea {
        border-style: ${theme.inputBorderStyle};
        border-width: ${theme.inputBorderWidth};
        font-family: ${theme.inputTextFontFamily};
        -webkit-appearance: none;

        ${componentAnimation('border, background-color, color, box-shadow')}
        
        ${fullWidth && 'width: 100%;'}

        & ~ .label {
          font-family: ${theme.inputPlaceholderTextFontFamily};
          text-overflow: ellipsis;
        }
        
        &:focus {
          outline: none;
        }

      
        &[disabled] ~ .label {
          opacity: 0.5;
        }
      
        ${status &&
          css`
            background-color: ${theme[`input${status}BackgroundColor` as ThemeKey]};
            border-color: ${theme[`input${status}BorderColor` as ThemeKey]};
            color: ${theme[`input${status}TextColor` as ThemeKey]};

            & ~ .label {
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

              & ~ .label {
                color: ${theme[`input${status}DisabledPlaceholderTextColor` as ThemeKey]};
              }
            }
          `}

        ${shape &&
          css`
            border-radius: ${theme[`input${shape}BorderRadius` as ThemeKey]};
          `}

        ${size &&
          css`
            font-size: ${theme[`input${size}TextFontSize` as ThemeKey]};
            font-weight: ${theme[`input${size}TextFontWeight` as ThemeKey]};
            line-height: ${theme[`input${size}TextLineHeight` as ThemeKey]};
            padding: ${theme[`input${size}Padding` as ThemeKey]};

            ${!fullWidth && `max-width: ${theme[`input${size}MaxWidth` as ThemeKey]};`}

            & ~ .label {
              font-size: ${theme[`input${size}PlaceholderTextFontSize` as ThemeKey]};
              font-weight: ${theme[`input${size}PlaceholderTextFontWeight` as ThemeKey]};
              line-height: ${theme[`input${size}PlaceholderTextLineHeight` as ThemeKey]};
            }
          `}
      }
    `;
  }}
`;

export interface InputGroupProps {
  shape?: Shape;
  fullWidth?: boolean;
  size?: Size;
  status?: Status;
  label?: string;
  children: React.ReactNode;
}

export const InputGroup: React.FC<InputGroupProps> = props => {
  return (
    <GroupStyle {...props}>
      {props.children}
      {props.label && <div className="label">{props.label}</div>}
    </GroupStyle>
  );
};

InputGroup.defaultProps = {
  size: 'Medium',
  shape: 'Rectangle',
};
