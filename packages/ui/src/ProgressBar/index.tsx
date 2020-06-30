import styled, { css } from 'styled-components';
import React from 'react';
import { Size, Status } from '../types';
import { ThemeKey } from '@paljs/theme';

interface ProgressProps {
  size?: Size;
  status?: Status;
  value?: number;
  displayValue?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ProgressStyle = styled.div<ProgressProps>`
  ${({ theme, size, status, value }) => css`
    display: block;
    .progress-container {
      overflow: hidden;
      border-radius: ${theme.progressBarBorderRadius};
    }
    .progress-value {
      height: 100%;
      width: ${value}%;
      text-align: center;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${theme.progressBarTextFontFamily};
      transition-duration: ${theme.progressBarAnimationDuration};
      transition-property: width, background-color;
    }
    ${size &&
    css`
      .progress-container {
        height: ${theme[`progressBar${size}Height` as ThemeKey]};
      }

      .progress-value {
        font-size: ${theme[`progressBar${size}TextFontSize` as ThemeKey]};
        font-weight: ${theme[`progressBar${size}TextFontWeight` as ThemeKey]};
        line-height: ${theme[`progressBar${size}TextLineHeight` as ThemeKey]};
      }
    `}
    ${status &&
    css`
      .progress-container {
        background-color: ${theme[`progressBar${status}BackgroundColor` as ThemeKey]};
      }

      .progress-value {
        background-color: ${theme[`progressBar${status}FilledBackgroundColor` as ThemeKey]};
        color: ${theme[`progressBar${status}TextColor` as ThemeKey]};
      }
    `}
  `}
`;

const Progress: React.FC<ProgressProps> = (props) => {
  return (
    <ProgressStyle {...props}>
      <div className="progress-container">
        <div className="progress-value">
          {props.displayValue && <span>{props.value}%</span>}
          {props.children}
        </div>
      </div>
    </ProgressStyle>
  );
};

Progress.defaultProps = {
  size: 'Medium',
  status: 'Basic',
  value: 0,
};

export default Progress;
