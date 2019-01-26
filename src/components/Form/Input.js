/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { shape } from '../types';

/* eslint-disable indent */
const GroupStyle = styled.div`
  ${({ theme, fieldSize, status, shape, fullWidth }) => {
    const padding = theme[`formControlPadding${fieldSize}`].split(' ');
    return css`
      display: flex;
      min-width: 0%;
      position: relative;
      margin-bottom: 1rem;
      
      .label {
        background: ${theme.formControlBg};
        color: ${theme.formControlPlaceholderColor};
        ${theme.dir === 'rtl' ? 'right: 0;' : 'left: 0;'}
        top: 0;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
        transform-origin: top ${theme.dir === 'rtl' ? 'right' : 'left'};
        pointer-events: none;
        position: absolute;
        line-height: 1.15;
        padding: 0 5px;
        font-size: ${theme[`formControlFontSize${fieldSize}`]};
        transform: translate(
          ${theme.dir === 'rtl' && '-'}${padding[1]}, 
          calc(${padding[0]} + ${theme.formControlBorderWidth})
        );
      }

      input,
      textarea {
        &:not([disabled]):focus ~ .label,
        &[value]:not([value=""]) ~ .label{
          transform: scale(.90) translate(
            ${theme.dir === 'rtl' && '-'}${padding[1]}, 
            -50%
          );

          color: ${
            status
              ? theme[`formControl${status}BorderColor`]
              : theme.formControlSelectedBorderColor
          };

        }
      }
      select {
        height: calc(
          (${padding[0]} * 2 ) + 
          (${theme[`formControlFontSize${fieldSize}`]} * 1.15)
          );
        box-sizing: content-box;
        & ~ .label{
          transform: scale(.90) translate(
            ${theme.dir === 'rtl' && '-'}${padding[1]}, 
            -50%
          );
        }
        &:not([disabled]):focus ~ .label{
          color: ${
            status
              ? theme[`formControl${status}BorderColor`]
              : theme.formControlSelectedBorderColor
          };
        }
      }

      input,
      select,
      textarea{
        background-color: ${theme.formControlBg};
        border-width: ${theme.formControlBorderWidth};
        border-color: ${theme.formControlBorderColor};
        border-style: ${theme.formControlBorderType};
        color: ${theme.formControlTextPrimaryColor};
        ${fullWidth && 'width: 100%;'}
        
        &:focus {
          outline: none;
          background-color: ${theme.formControlFocusBg};
          ${!status && `border-color: ${theme.formControlSelectedBorderColor};`}
        }

      
        &[disabled] ~ .label {
          opacity: 0.5;
        }
      
        ${status &&
          css`
            border-color: ${theme[`formControl${status}BorderColor`]};
          `}
        ${shape &&
          css`
            border-radius: ${theme[`formControl${shape}BorderRadius`]};
          `}
        ${fieldSize &&
          css`
            font-size: ${theme[`formControlFontSize${fieldSize}`]};
            padding: ${theme[`formControlPadding${fieldSize}`]};
          `}
      }
    `;
  }}
`;

function InputGroup(props) {
  return (
    <GroupStyle {...props}>
      {props.children}
      <div className="label">{props.label}</div>
    </GroupStyle>
  );
}

InputGroup.defaultProps = {
  fieldSize: 'MD',
  shape: 'Rectangle'
};
InputGroup.propTypes = {
  shape,
  fullWidth: PropTypes.bool,
  fieldSize: PropTypes.oneOf(['SM', 'MD', 'LG']),
  status: PropTypes.oneOf(['Info', 'Warning', 'Success', 'Danger'])
};
export default InputGroup;
