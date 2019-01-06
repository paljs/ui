import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from './inputStyle';

function Input(props) {
  const [blur, setBlur] = useState(false);
  let inputElement = null;
  let invalid = false;
  if (props.invalid && props.shouldValidate && props.touched && blur) {
    invalid = true;
  }
  switch (props.inputType) {
    case 'input':
      inputElement = (
        <input
          {...props.attributes}
          value={props.value}
          onChange={props.changed}
          onBlur={() => setBlur(true)}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select>
          {props.attributes.options.map(option => (
            <option
              key={option.value}
              value={option.value}
              onChange={props.changed}
              onBlur={() => setBlur(true)}
            >
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          {...props.attributes}
          value={props.value}
          onChange={props.changed}
          onBlur={() => setBlur(true)}
        />
      );
      break;
  }
  return (
    <InputGroup invalid={invalid}>
      <label>{props.attributes.placeholder}</label>
      {inputElement}
      {invalid && (
        <ul>
          {props.error.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </InputGroup>
  );
}
Input.propTypes = {
  inputType: PropTypes.oneOf(['input', 'select', 'textarea']).isRequired,
  attributes: PropTypes.object.isRequired,
  value: PropTypes.any.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.array.isRequired,
  shouldValidate: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  changed: PropTypes.func.isRequired
};
export default Input;
