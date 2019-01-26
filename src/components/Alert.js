/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { size, statusArray } from './types';

const AlertStyle = styled.div`
  ${({ theme, size, status, accent, outline, closable }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    font-size: ${theme.alertFontSize};
    line-height: ${theme.alertLineHeight};
    font-weight: ${theme.alertFontWeight};

    background: ${theme.alertBg};
    color: ${theme.alertOutlineFg};
    margin-bottom: ${theme.alertMargin};
    border-radius: ${theme.alertBorderRadius};
    box-shadow: ${theme.alertShadow};
    padding: ${theme.alertPadding};

    ${size && `height: ${theme[`alertHeight${size}`]};`}

    ${status &&
      css`
        background-color: ${theme[`alert${status}Bg`]};
        color: ${status === 'Disabled' ? theme.alertDisabledFg : theme.alertFg};
      `}

    ${accent &&
      css`
        border-top-style: solid;
        border-top-width: ${theme.alertBorderRadius};
        border-top-color: ${theme[`alert${accent}Bg`]};
      `}

    ${outline &&
      css`
        border: 2px solid ${theme[`alert${outline}Bg`]};
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
        padding-right: ${theme.alertClosablePadding};
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
const status = PropTypes.oneOf([...statusArray, 'Active', 'Disabled']);
Alert.propTypes = {
  size,
  status,
  accent: status,
  outline: status,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

export default Alert;
