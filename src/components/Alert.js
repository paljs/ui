/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { size, status } from './types';

const AlertStyle = styled.div`
  ${({ theme, size, status, accent, outline, closable }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    border-radius: ${theme.alertBorderRadius};
    box-shadow: ${theme.alertShadow};
    font-family: ${theme.alertTextFontFamily};
    font-size: ${theme.alertTextFontSize};
    font-weight: ${theme.alertTextFontWeight};
    line-height: ${theme.alertTextLineHeight};
    padding: ${theme.alertPadding};
    margin-bottom: ${theme.alertBottomMargin};

    ${size && `height: ${theme[`alert${size}Height`]};`}

    ${status &&
      css`
        background-color: ${theme[`alert${status}BackgroundColor`]};
        color: ${theme[`alert${status}TextColor`]};
        a,
        a:hover {
          color: ${theme[`alert${status}TextColor`]};
        }
      `}

    ${accent &&
      css`
        border-top: ${theme.alertBorderRadius} solid ${theme[`alertAccent${status}Color`]};
      `}

    ${outline &&
      css`
        border: ${theme.alertOutlineWidth} solid ${theme[`alertOutline${status}Color`]};
      `}

    .close {
      padding: ${theme.alertPadding};
      font-size: 1.5rem;
      line-height: 1;
      cursor: pointer;
      font-family: monospace;

      position: absolute;
      top: 0;
      ${theme.dir === 'rtl' ? 'left' : 'right'}: 0;
      color: inherit;
      background-color: transparent;
      border: 0;
      -webkit-appearance: none;
    }
    ${closable &&
      css`
        padding-${theme.dir === 'rtl' ? 'left' : 'right'}: ${theme.alertClosableStartPadding};
      `}
  `}
`;

function Alert(props) {
  return (
    <AlertStyle {...props}>
      {props.closable && (
        <button
          onClick={props.onClose}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
      {props.children}
    </AlertStyle>
  );
}

Alert.propTypes = {
  size,
  status,
  accent: status,
  outline: status,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

export default Alert;
