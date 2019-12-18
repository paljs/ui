/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
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

const placement = PropTypes.oneOf([
	'start',
	'end',
	'right',
	'left',
	'top',
	'bottom'
]);

const trigger = PropTypes.oneOf(['click', 'hover', 'focus', 'hint']);

const status = PropTypes.oneOf([
	'Info',
	'Success',
	'Danger',
	'Primary',
	'Warning',
	'Basic',
	'Control'
]);

const size = PropTypes.oneOf(['Tiny', 'Small', 'Medium', 'Large', 'Giant']);

const shape = PropTypes.oneOf(['Rectangle', 'SemiRound', 'Round']);

const appearance = PropTypes.oneOf(['filled', 'outline', 'ghost', 'hero']);

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
	fullWidth: PropTypes.bool,
	pulse: PropTypes.bool,
	appearance,
	size,
	shape,
	status
};

export {
	badge,
	size,
	status,
	shape,
	position,
	placement,
	trigger,
	menuItemsType,
	buttonTypes,
	customCss
};
