/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { colorState } from '../types';

const RadioStyle = styled.label`
  ${({ theme, checked, disabled, status }) => {
    const state = checked ? 'Checked' : disabled ? 'Disabled' : '';
    const size = theme[`radio${state}Size`];
    return css`
      position: relative;
      display: inline-flex;
      margin: 0;
      min-height: inherit;
      padding: 0.375rem 1.5rem 0.375rem 0;
      input {
        position: absolute;
        opacity: 0;
      }
      ${disabled &&
        css`
          .indicator,
          .description {
            opacity: 0.5;
          }
        `}
      .indicator {
        border-radius: 50%;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme[`radio${state}Bg`]};
        width: ${size};
        height: ${size};
        border: ${theme[`radio${state}BorderSize`]} solid
          ${theme[`radio${state}BorderColor`]};

        &::before {
          content: '';
          transition: all 0.1s;
          border-radius: 50%;
          background-color: ${theme[`radio${state}Checkmark`]};
          height: calc(${size} * 0.6);
          width: calc(${size} * 0.6);
          border: solid ${theme[`radio${state}Checkmark`]};
        }
      }
      .description {
        color: ${theme.radioFg};
        padding-${theme.dir === 'rtl' ? 'right' : 'left'}: 0.5rem;
      }
      ${!disabled &&
        css`
          &:hover .indicator {
            border-color: ${theme[hoverBorder(status)]};
          }
        `}
        ${checked &&
          css`
            .indicator {
              border-color: ${theme[hoverBorder(status)]};
            }
          `}
    `;
  }}
`;
const hoverBorder = status =>
  status ? `color${status}` : 'radioCheckedBorderColor';

function Radio(props) {
  const [options, setOptions] = useState(props.options);

  const onClickHandler = value => {
    const updateOptions = [...options];
    for (const option of updateOptions) {
      option.checked = option.value === value;
    }
    setOptions(updateOptions);
    props.onChange(value);
  };

  return options.map(option => (
    <RadioStyle
      status={option.status}
      checked={option.checked}
      disabled={option.disabled || props.disabled}
      key={option.value}
      className={props.className}
    >
      <input
        type="radio"
        name={props.name}
        disabled={option.disabled || props.disabled}
        onClick={() => onClickHandler(option.value)}
      />
      <span className="indicator" />
      <span className="description">{option.label}</span>
    </RadioStyle>
  ));
}

Radio.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      status: colorState
    }).isRequired
  ).isRequired
};
export default Radio;
