/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';

function Step() {}
function Stepper() {
  return;
}

Stepper.propType = {
  orientation: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      hidden: PropTypes.bool,
      completed: PropTypes.bool,
    }),
  ),
};

export { Stepper, Step };
