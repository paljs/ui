/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { Size, Status } from '../types';
import { ThemeKey } from '@paljs/theme';
import { scrollbars } from '../utils';

interface AlertProps {
  size?: Size;
  status?: Status;
  accent?: Status;
  outline?: Status;
  closable?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AlertStyle = styled.div<AlertProps>`
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

    ${scrollbars(theme.alertScrollbarColor, theme.alertScrollbarBackgroundColor, theme.alertScrollbarWidth)}

    ${size && `height: ${theme[`alert${size}Height` as ThemeKey]};`}

    ${
      status &&
      css`
        background-color: ${theme[`alert${status}BackgroundColor` as ThemeKey]};
        color: ${theme[`alert${status}TextColor` as ThemeKey]};
        a,
        a:hover {
          color: ${theme[`alert${status}TextColor` as ThemeKey]};
        }
      `
    }

    ${
      accent &&
      css`
        border-top: ${theme.alertBorderRadius} solid ${theme[`alertAccent${status}Color` as ThemeKey]};
      `
    }

    ${
      outline &&
      css`
        border: ${theme.alertOutlineWidth} solid ${theme[`alertOutline${status}Color` as ThemeKey]};
      `
    }

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
    ${
      closable &&
      css`
        padding-${theme.dir === 'rtl' ? 'left' : 'right'}: ${theme.alertClosableStartPadding};
      `
    }
  `}
`;

const Alert: React.FC<AlertProps> = (props) => {
  return (
    <AlertStyle {...props}>
      {props.closable && (
        <button onClick={props.onClose} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      )}
      {props.children}
    </AlertStyle>
  );
};

Alert.defaultProps = {
  status: 'Basic',
};

export default Alert;
