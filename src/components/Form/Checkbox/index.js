/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CheckboxStyle from './style';
import { colorState } from '../../types';

const Checkbox = props => {
  const [value, setValue] = useState(props.checked ? props.checked : false);

  const onChangeHandler = () => {
    typeof props.onChange === 'function' && props.onChange(!value);
    setValue(!value);
  };

  return (
    <CheckboxStyle
      disabled={props.disabled}
      checked={value}
      status={props.status}
      className={props.className}
    >
      <input
        type="checkbox"
        disabled={props.disabled}
        checked={value}
        onChange={onChangeHandler}
        onBlur={props.onBlur}
      />
      <span className="indicator" />
      <span className="description">{props.children}</span>
    </CheckboxStyle>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  status: colorState
};
export default Checkbox;
