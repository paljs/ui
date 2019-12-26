import styled, { css } from 'styled-components';
import React from 'react';
import { Size, Status } from './types';

interface ProgressProps {
  size?: Size;
  status?: Status;
  value?: number;
  displayValue?: boolean;
}

const ProgressStyle = styled.div<ProgressProps>`
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

const Progress: React.FC<ProgressProps> = props => {
  return (
    <ProgressStyle {...props}>
      <div className="progress-value">
        {props.displayValue && <span>{props.value}%</span>}
        {props.children}
      </div>
    </ProgressStyle>
  );
};

Progress.defaultProps = {
  size: 'MD',
  status: 'Default',
  value: 0,
};

export default Progress;
