/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css, keyframes } from 'styled-components';
import { tint, shade, adjustHue, mix } from 'polished';
import PropTypes from 'prop-types';
import { shape, statusArray } from '../types';

/* eslint-disable indent */

const ButtonStyle = css`
  ${({ theme, shape, size, status, fullWidth, outline, hero, pulse }) => css`
    text-transform: uppercase;
    letter-spacing: 0.4px;
    border: 2px solid transparent;
    transition: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;

    color: ${theme.btnFg};
    font-weight: ${theme.fontWeightBolder};
    font-family: ${theme.btnFontFamily};
    cursor: ${theme.btnCursor};
    ${!outline &&
      css`
        &:focus,
        &:hover,
        &:active,
        &.focus,
        &.hover,
        &.active {
          color: ${theme.btnFg};
          cursor: ${theme.btnCursor};
        }
      `}

    &:hover,
    &:focus {
      text-decoration: none;
    }

    ${size &&
      css`
        padding: ${theme[`btnPaddingY${size}`]} ${theme[`btnPaddingX${size}`]};
        font-size: ${theme[`btnFontSize${size}`]};
        line-height: ${theme.btnLineHeight};
        border-radius: ${theme.btnBorderRadius};
      `}

    ${shape &&
      css`
        border-radius: ${theme[`btn${shape}BorderRadius`]};
      `}


    ${pulse && btnPulse(theme[`btn${status}Bg`], theme.btnDisabledOpacity)}


    ${status &&
      css`
        ${
          status === 'Secondary' || outline
            ? css`
                border: 2px solid ${theme[color(status)]};
                color: ${theme.btnOutlineFg};
                background-color: ${outline
                  ? 'transparent'
                  : theme.btnSecondaryBg};
              `
            : `background-color: ${theme[`btn${status}Bg`]};`
        }

        &:focus,
        &.focus {
          ${
            status === 'Secondary' || outline
              ? css`
                  border-color: ${tint(
                    percentage(status, outline),
                    theme[color(status)]
                  )};
                  box-shadow: none;
                `
              : css`
                  color: ${theme.btnOutlineHoverFg};
                  background-color: ${tint(
                    percentage(status),
                    theme[color(status)]
                  )};
                  border-color: transparent;
                  box-shadow: none;
                `
          }
        }
        &:hover,
        &.hover {
          color: ${theme.btnOutlineHoverFg};
          background-color: ${tint(percentage(status), theme[color(status)])};
          border-color: transparent;
        }
        &:active,
        &.active,
        &:active:focus {
          color: ${theme.btnOutlineHoverFg};
          background-color: ${shade(percentage(status), theme[color(status)])};
          border-color: transparent;
          box-shadow: none;
        }

        &:disabled,
        &.disabled {
          opacity: ${theme.btnDisabledOpacity};
          cursor: not-allowed;
        }


        ${status === 'Secondary' &&
          css`
            &:focus,
            &.focus,
            &:hover,
            &.hover,
            &:active,
            &.active {
              color: ${theme.btnOutlineFg};
            }
          `}

/* hero button start */
      ${hero &&
        css`
          background-image: linear-gradient(
            to right,
            ${leftColor(status, theme)},
            ${theme[color(status)]}
          );
          box-shadow: ${heroShadow(status, theme)};
          text-shadow: ${theme.btnHeroTextShadow};
          line-height: calc((${theme[`btnFontSize${size}`]} * 1.25) + 4px);
          &:focus,
          &.focus,
          &:hover,
          &.hover {
            background-image: ${lightGradient(status, theme)};
          }
          &:active,
          &.active {
            background-image: ${darkGradient(status, theme)};
            box-shadow: none;
            border-color: transparent;
          }
          ${status === 'Secondary'
            ? `border : 2px solid ${theme.btnSecondaryBorder}`
            : 'border: none'};
        `}

      `}

    ${fullWidth && 'width: 100%;'}
  `}
`;

const lightGradient = (status, theme) => {
  return `linear-gradient(to right, ${tint(
    0.14,
    leftColor(status, theme)
  )}, ${tint(0.14, theme[color(status)])});`;
};

const darkGradient = (status, theme) => {
  return `linear-gradient(to right, ${shade(
    0.14,
    leftColor(status, theme)
  )}, ${shade(0.14, theme[color(status)])});`;
};

const leftColor = (status, theme) =>
  adjustHue(heroPercentage[status], theme[color(status)]);

const heroShadow = (status, theme) => {
  const middleColor = mix(
    0.5,
    adjustHue(heroPercentage[status], theme[color(status)]),
    theme[color(status)]
  );
  const bevel = theme.btnHeroBevelSize + ' ' + shade(0.14, middleColor);
  const glow = theme.btnHeroGlowSize + ' ' + middleColor;
  const shadow = theme.btnHeroShadow;
  const boxShadow = [bevel, glow];
  shadow !== 'none' && boxShadow.push(shadow);
  return boxShadow.join(',');
};

const heroPercentage = {
  Primary: 20,
  Success: 20,
  Warning: 10,
  Info: -10,
  Danger: -20,
  Secondary: 20
};
const percentage = (status, outline) =>
  status === 'Secondary' || outline ? 0.2 : 0.14;

const color = status =>
  status === 'Secondary' ? 'btnSecondaryBorder' : `btn${status}Bg`;

const btnPulse = (color, opacity) => {
  const pulse = keyframes`
  0% {
      box-shadow: none;
      opacity: ${opacity};
    }
    50% {
      box-shadow: 0 0 1rem 0 ${color};
      opacity: 0.8;
    }
    100% {
      box-shadow: none;
      opacity: ${opacity};
    }
  `;
  return css`
    animation: ${pulse} 1.5s infinite;
  `;
};

const defaultProps = {
  size: 'MD',
  status: 'Primary'
};

const propTypes = {
  fullWidth: PropTypes.bool,
  hero: PropTypes.bool,
  outline: PropTypes.bool,
  pulse: PropTypes.bool,
  size: PropTypes.oneOf(['XS', 'SM', 'MD', 'LG']),
  shape,
  status: PropTypes.oneOf([...statusArray, 'Secondary'])
};

const Button = styled.button`
  ${ButtonStyle}
`;

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

const ButtonLink = styled.a`
  ${ButtonStyle}
`;

ButtonLink.defaultProps = defaultProps;
ButtonLink.propTypes = propTypes;

const ButtonInput = styled.input`
  &[type='button'],
  &[type='submit'] {
    ${ButtonStyle}
  }
`;

ButtonInput.defaultProps = { ...defaultProps, type: 'button' };
ButtonInput.propTypes = {
  ...propTypes,
  type: PropTypes.oneOf(['button', 'submit'])
};

export { Button, ButtonLink, ButtonInput, ButtonStyle };
