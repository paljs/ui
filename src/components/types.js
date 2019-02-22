/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';

const badge = PropTypes.shape({
  status: colorState,
  title: PropTypes.string,
  position
});
const position = PropTypes.oneOf([
  'topRight',
  'topLeft',
  'bottomRight',
  'bottomLeft',
  'topStart',
  'topEnd',
  'bottomStart',
  'bottomEnd'
]);

const colorState = PropTypes.oneOf([
  'Info',
  'Success',
  'Danger',
  'Primary',
  'Warning',
  'Disabled',
  'Active'
]);

const placement = PropTypes.oneOf([
  'start',
  'end',
  'right',
  'left',
  'top',
  'bottom'
]);

const trigger = PropTypes.oneOf(['click', 'hover', 'focus']);

const statusArray = ['Info', 'Success', 'Danger', 'Primary', 'Warning'];

const size = PropTypes.oneOf(['XXS', 'XS', 'SM', 'MD', 'LG', 'XL', 'XXL']);

const shape = PropTypes.oneOf(['Rectangle', 'SemiRound', 'Round']);
const customCss = {
  className: PropTypes.string,
  style: PropTypes.object
};
const itemType = {
  title: PropTypes.string.isRequired,
  link: PropTypes.any,
  expanded: PropTypes.bool,
  group: PropTypes.bool,
  hidden: PropTypes.bool,
  icon: PropTypes.string,
  target: PropTypes.string,
  url: PropTypes.string
};
function menuItemsType(...args) {
  return PropTypes.arrayOf(
    PropTypes.shape({
      ...itemType,
      children: menuItemsType
    })
  )(...args);
}

const buttonTypes = {
  ...customCss,
  fullWidth: PropTypes.bool,
  hero: PropTypes.bool,
  outline: PropTypes.bool,
  pulse: PropTypes.bool,
  size: PropTypes.oneOf(['XS', 'SM', 'MD', 'LG']),
  shape,
  status: PropTypes.oneOf([...statusArray, 'Secondary'])
};

export {
  badge,
  colorState,
  size,
  statusArray,
  shape,
  position,
  placement,
  trigger,
  menuItemsType,
  buttonTypes,
  customCss
};
