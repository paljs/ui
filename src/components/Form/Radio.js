import styled, { css } from 'styled-components';
import { useState } from 'react';
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
  const [items, setItems] = useState(props.items);

  const onClickHandler = value => {
    const updateItems = [...items];
    for (const item of updateItems) {
      item.checked = item.value === value;
    }
    setItems(updateItems);
    props.onChange(value);
  };

  return (
    <div>
      {items.map(item => (
        <RadioStyle
          status={item.status}
          checked={item.checked}
          disabled={item.disabled || props.disabled}
          key={item.value}
        >
          <input
            type="radio"
            name={props.name}
            disabled={item.disabled || props.disabled}
            onClick={() => onClickHandler(item.value)}
          />
          <span className="indicator" />
          <span className="description">{item.label}</span>
        </RadioStyle>
      ))}
    </div>
  );
}

Radio.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
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
