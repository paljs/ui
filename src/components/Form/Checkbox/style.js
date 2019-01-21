/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const CheckboxStyle = styled.label`
  ${({ theme, checked, disabled, status }) => css`
    position: relative;
    display: inline-flex;
    margin: 0;
    min-height: inherit;
    padding: 0.375rem 1.5rem 0.375rem 0;

    input {
      position: absolute;
      opacity: 0;
      &:disabled {
        & ~ .indicator,
        & ~ .description {
          opacity: 0.5;
        }
      }
    }
    .indicator {
      border-radius: 0.25rem;
      flex-shrink: 0;
      ${indicatorStyle(theme, checked, disabled, status)}
    }
    .description {
      color: ${theme.colorFgHeading};
      padding-${theme.dir === 'rtl' ? 'right' : 'left'}: 0.5rem;
    }
    ${!disabled &&
      css`
        &:hover .indicator,
        input:focus + .indicator {
          border-color: ${lighten(0.1, theme[hoverBorder(status)])};
        }
      `}
  `}
`;
const hoverBorder = status =>
  status ? `color${status}` : 'checkboxCheckedBorderColor';

const indicatorStyle = (theme, checked, disabled, status) => {
  const state = disabled ? 'Disabled' : checked ? 'Checked' : '';
  const size = theme[`checkbox${state}Size`];
  const borderSize = theme[`checkbox${state}BorderSize`];
  const checkmark = disabled && checked ? 'Disabled' : checked ? 'Checked' : '';

  let borderColor = theme[`checkbox${state}BorderColor`];
  if (disabled) {
    borderColor = theme['checkboxBorderColor'];
  }
  if (disabled && checked) {
    borderColor = theme['checkboxCheckedBorderColor'];
  }
  if (status && checked) {
    borderColor = theme[`color${status}`];
  }

  return css`
    background-color: ${theme[`checkbox${state}Bg`]};
    width: ${size};
    height: ${size};
    border: ${borderSize} solid ${borderColor};
    &::before {
      content: '';
      border-style: solid;
      display: block;
      margin: 0 auto;
      transform: rotate(45deg);
      height: calc(${size} * 0.6);
      width: calc(${size} * 0.4);
      border-color: ${theme[`checkbox${checkmark}Checkmark`]};
      border-width: 0 ${borderSize} ${borderSize} 0;
    }
  `;
};

export default CheckboxStyle;
