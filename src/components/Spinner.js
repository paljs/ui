/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css, keyframes } from 'styled-components';
import React from 'react';
import { size, colorState } from './types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(230deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyle = styled.div`
  ${({ theme, size, status }) => css`
    opacity: 1;
    position: absolute;
    border-radius: inherit;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;
    background-color: ${theme.spinnerBg};
     ${size && `font-size: ${theme[`spinner${size}`]}`};
    }

    .spin-circle {
      animation: ${spin} 0.8s infinite linear;
      border-radius: 50%;
      border-style: solid;
      border-width: 0.125em;
      width: 1em;
      height: 1em;
      border-left-color: ${theme.spinnerCircleBg};
      border-top-color: ${theme.spinnerCircleBg};
      border-bottom-color: ${theme.spinnerCircleBg};
      ${status && `border-right-color: ${theme[`spinner${status}Bg`]};`}
    }

    .message {
      margin-left: 0.5rem;
      line-height: 1rem;
      font-size: 1rem;
      color: ${theme.spinnerFg};
    }
  `}
`;

function Spinner(props) {
  return (
    <SpinnerStyle {...props}>
      <span className="spin-circle" />
      <span className="message">{props.children}</span>
    </SpinnerStyle>
  );
}
Spinner.defaultProps = {
  size: 'MD',
  status: 'Primary'
};

Spinner.propTypes = {
  size,
  status: colorState
};

export default Spinner;
