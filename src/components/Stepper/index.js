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
      completed: PropTypes.bool
    })
  )
};

export { Stepper, Step };
