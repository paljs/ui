import PropTypes from 'prop-types';

const badge = PropTypes.shape({
  status: colorState,
  title: PropTypes.string,
  position: PropTypes.oneOf([
    'topRight',
    'topLeft',
    'bottomRight',
    'bottomLeft',
    'topStart',
    'topEnd',
    'bottomStart',
    'bottomEnd'
  ])
});

const colorState = PropTypes.oneOf([
  'Info',
  'Success',
  'Danger',
  'Primary',
  'Warning',
  'Disabled'
]);

const cardSize = PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']);

export { badge, colorState, cardSize };
