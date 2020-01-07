/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import CheckboxStyle from './style';
import { Status } from '../../types';
import { Icon } from '../../Icon';

export interface CheckboxStyleProps {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  status?: Status;
  indeterminate?: boolean;
}

export interface CheckboxProps extends CheckboxStyleProps {
  onChange?: (value: boolean) => void;
  onBlur?: (event: React.SyntheticEvent) => void;
}

const Checkbox: React.FC<CheckboxProps> = props => {
  const [value, setValue] = React.useState<boolean>(props.checked ? props.checked : false);

  const uncontrolled = typeof props.onChange === 'function';
  const onChangeHandler = () => {
    props.onChange && props.onChange(!value);
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
          className="native-input visually-hidden"
          disabled={props.disabled}
          onBlur={props.onBlur}
          checked={value}
          onChange={onChangeHandler}
        />
      ) : (
        <input
          type="checkbox"
          className="native-input visually-hidden"
          disabled={props.disabled}
          onBlur={props.onBlur}
        />
      )}

      <span className="custom-checkbox">
        {value && !props.indeterminate && <Icon name="checkmark-bold-outline" />}
        {props.indeterminate && <Icon name="minus-bold-outline" />}
      </span>
      <span className="text">{props.children}</span>
    </CheckboxStyle>
  );
};

Checkbox.defaultProps = {
  status: 'Basic',
};

export { Checkbox };
