/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import PropTypes from 'prop-types';

import CheckboxStyle from './style';
import { colorState } from '../../types';

const Checkbox = props => {
  const [value, setValue] = React.useState(props.checked ? props.checked : false);

  const uncontrolled = typeof props.onChange === 'function';
  const onChangeHandler = () => {
    uncontrolled && props.onChange(!value);
    setValue(!value);
  };

  return (
    <CheckboxStyle
      disabled={props.disabled}
      checked={uncontrolled ? value : props.checked}
      status={props.status}
      className={props.className}
      style={props.style}
    >
      {uncontrolled ? (
        <input
          type="checkbox"
          disabled={props.disabled}
          onBlur={props.onBlur}
          checked={value}
          onChange={onChangeHandler}
        />
      ) : (
        <input
          type="checkbox"
          disabled={props.disabled}
          onBlur={props.onBlur}
        />
      )}

      <span className="indicator" />
      <span className="description">{props.children}</span>
    </CheckboxStyle>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  status: colorState
};
export default Checkbox;
