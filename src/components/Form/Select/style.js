/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const StyledSelect = styled.div`
  ${({ theme, shape, fieldSize, fullWidth, status, focused }) => {
    const padding = theme[`formControlPadding${fieldSize}`].split(' ');
    return css`
    position: relative;
    .label {
        background: ${theme.formControlBg};
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
        transform: scale(.90) translate(
            ${theme.dir === 'rtl' && '-'}${padding[1]}, 
            -50%
          );

        color: ${theme.formControlPlaceholderColor};
        ${focused && `color: ${theme.formControlSelectedBorderColor}`};
        ${status && `color: ${theme[`formControl${status}BorderColor`]}`};
      }
    .select-container {
      display: flex;
      min-width: 0%;
      margin-bottom: 1rem;
      line-height: 1.15;

      .select__control {
        background-color: ${theme.formControlBg};
        border-width: ${theme.formControlBorderWidth};
        border-color: ${theme.formControlBorderColor};
        border-style: ${theme.formControlBorderType};
        color: ${theme.formControlTextPrimaryColor};
        box-shadow: none;
        ${fullWidth && 'width: 100%;'}
        height: calc(
          (${padding[0]} * 2 ) + 
          (${theme[`formControlFontSize${fieldSize}`]} * 1.15) +
          (${theme.formControlBorderWidth} * 2)
          );

        ${status &&
          css`
            border-color: ${theme[`formControl${status}BorderColor`]};
          `}
        ${shape &&
          css`
            border-radius: ${theme[`formControl${shape}BorderRadius`]};
          `}
        .select__value-container {
          .select__placeholder{
            color: ${theme.formControlPlaceholderColor};
          }
          .select__single-value{
            color: inherit;
          }
          .select__multi-value__remove{
            color: ${theme.colorDanger};
          }
            
        }
      }
      .select__control--is-focused {
        outline: none;
        background-color: ${theme.formControlFocusBg};
        ${!status && `border-color: ${theme.formControlSelectedBorderColor};`}
      }
      .select__menu {
        z-index: 2;
        box-shadow: none;
        background-color: ${theme.selectBg};
        max-height: ${theme.selectMaxHeight};
        border-width: ${theme.formControlBorderWidth};
        border-color: ${theme.formControlBorderColor};
        border-style: ${theme.formControlBorderType};
        .select__option--is-focused,
        .select__option--is-selected {
          background-color: ${theme['colorSuccess']};
          color: ${theme.colorWhite};
        }
        ${status &&
          css`
            border: ${theme.selectBorderWidth} solid ${theme[`color${status}`]};
            .select__option--is-focused,
            .select__option--is-selected {
              background-color: ${theme[`color${status}`]};
              color: ${theme.colorWhite};
            }
          `}
      }
    }
  `;
  }}
`;
export default StyledSelect;
