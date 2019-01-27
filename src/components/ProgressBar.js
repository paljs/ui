import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { statusArray } from './types';

const ProgressStyle = styled.div`
  ${({ theme, size, status, value }) => css`
    overflow: hidden;
    display: block;
    height: ${theme[`progressBarHeight${size}`]};
    border-radius: ${theme.progressBarRadius};
    background-color: ${theme.progressBarBg};
    .progress-value {
      height: 100%;
      width: ${value}%;
      text-align: center;
      overflow: hidden;
      background-color: ${theme[`progressBar${status}Bg`]};
      color: ${theme.progressBarFontColor};
      font-size: ${theme[`progressBarFontSize${size}`]};
      font-weight: ${theme.progressBarFontWeight};
      line-height: ${theme.progressBarLineHeight};
      transition-duration: ${theme.progressBarAnimationDuration};
      transition-property: width, background-color;
    }
  `}
`;

function Progress(props) {
  return (
    <ProgressStyle {...props}>
      <div className="progress-value">
        {props.displayValue && <span>{props.value}%</span>}
        {props.children}
      </div>
    </ProgressStyle>
  );
}

Progress.defaultProps = {
  size: 'MD',
  status: 'Default',
  value: 0
};

Progress.propTypes = {
  size: PropTypes.oneOf(['XS', 'SM', 'MD', 'LG', 'XL']),
  status: PropTypes.oneOf([...statusArray, 'Default']),
  value: PropTypes.number,
  displayValue: PropTypes.bool
};

export default Progress;
