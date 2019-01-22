/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactSelect from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './style';

function Select(props) {
  const [focused, setFocused] = useState(false);

  return (
    <StyledSelect
      focused={focused}
      {...props}
      onClick={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="label">{props.label}</div>
      <ReactSelect
        placeholder={props.label}
        components={makeAnimated()}
        {...props}
        className="select-container"
        classNamePrefix="select"
      />
    </StyledSelect>
  );
}
Select.defaultProps = {
  fieldSize: 'MD',
  shape: 'Rectangle'
};

Select.propTypes = {
  fullWidth: PropTypes.bool,
  fieldSize: PropTypes.oneOf(['SM', 'MD', 'LG']),
  shape: PropTypes.oneOf(['Rectangle', 'SemiRound', 'Round']),
  status: PropTypes.oneOf(['Info', 'Warning', 'Success', 'Danger'])
};
export default Select;
