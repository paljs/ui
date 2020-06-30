/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css, keyframes } from 'styled-components';
import { ButtonTypes } from '../types';
import { ThemeKey, ThemeKeys } from '@paljs/theme';
import { componentAnimation, outlineShadow } from '../utils';

const btnPulse = (color: ThemeKeys) => {
  const pulse = keyframes`
  0% {
      box-shadow: none;
      opacity: 0.3;
    }
    100% {
      box-shadow: 0 0 1rem 0 ${color};
      opacity: 0.8;
    }
  `;
  return css`
    animation: ${pulse} 1.5s infinite alternate;
  `;
};

const filled = css<ButtonTypes>`
  ${({ status, size, theme }) => css`
    border-style: ${theme.buttonFilledBorderStyle};
    border-width: ${theme.buttonFilledBorderWidth};
    text-transform: ${theme.buttonFilledTextTransform};
    padding: ${theme[`buttonFilled${size}Padding` as ThemeKey]};
    background-color: ${theme[`buttonFilled${status}BackgroundColor` as ThemeKey]};
    border-color: ${theme[`buttonFilled${status}BorderColor` as ThemeKey]};
    color: ${theme[`buttonFilled${status}TextColor` as ThemeKey]};

    &:focus {
      outline: none;
      ${outlineShadow(theme.buttonOutlineWidth, theme.buttonOutlineColor)}
    }

    &:focus,
    &.focus {
      background-color: ${theme[`buttonFilled${status}FocusBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonFilled${status}FocusBorderColor` as ThemeKey]};
    }
    &:hover,
    &.hover {
      background-color: ${theme[`buttonFilled${status}HoverBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonFilled${status}HoverBorderColor` as ThemeKey]};
    }
    &:active,
    &.active,
    &:active:focus {
      background-color: ${theme[`buttonFilled${status}ActiveBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonFilled${status}ActiveBorderColor` as ThemeKey]};
    }

    &:disabled,
    &.disabled {
      background-color: ${theme[`buttonFilled${status}DisabledBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonFilled${status}DisabledBorderColor` as ThemeKey]};
      color: ${theme[`buttonFilled${status}DisabledTextColor` as ThemeKey]};
    }
  `}
`;
const outline = css<ButtonTypes>`
  ${({ status, size, theme }) => css`
    border-style: ${theme.buttonOutlineBorderStyle};
    border-width: ${theme.buttonOutlineBorderWidth};
    text-transform: ${theme.buttonOutlineTextTransform};
    padding: ${theme[`buttonOutline${size}Padding` as ThemeKey]};
    background-color: ${theme[`buttonOutline${status}BackgroundColor` as ThemeKey]};
    border-color: ${theme[`buttonOutline${status}BorderColor` as ThemeKey]};
    color: ${theme[`buttonOutline${status}TextColor` as ThemeKey]};

    &:focus {
      outline: none;
      ${outlineShadow(theme.buttonOutlineWidth, theme.buttonOutlineColor, true)}
    }

    &:focus,
    &.focus {
      background-color: ${theme[`buttonOutline${status}FocusBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonOutline${status}FocusBorderColor` as ThemeKey]};
      color: ${theme[`buttonOutline${status}FocusTextColor` as ThemeKey]};
    }
    &:hover,
    &.hover {
      background-color: ${theme[`buttonOutline${status}HoverBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonOutline${status}HoverBorderColor` as ThemeKey]};
      color: ${theme[`buttonOutline${status}HoverTextColor` as ThemeKey]};
    }
    &:active,
    &.active,
    &:active:focus {
      background-color: ${theme[`buttonOutline${status}ActiveBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonOutline${status}ActiveBorderColor` as ThemeKey]};
      color: ${theme[`buttonOutline${status}ActiveTextColor` as ThemeKey]};
    }

    &:disabled,
    &.disabled {
      background-color: ${theme[`buttonOutline${status}DisabledBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonOutline${status}DisabledBorderColor` as ThemeKey]};
      color: ${theme[`buttonOutline${status}DisabledTextColor` as ThemeKey]};
    }
  `}
`;
const ghost = css<ButtonTypes>`
  ${({ status, size, theme }) => css`
    background-color: ${theme.buttonGhostBackgroundColor};
    border-color: ${theme.buttonGhostBorderColor};
    border-style: ${theme.buttonGhostBorderStyle};
    border-width: ${theme.buttonGhostBorderWidth};
    text-transform: ${theme.buttonGhostTextTransform};
    padding: ${theme[`buttonGhost${size}Padding` as ThemeKey]};
    color: ${theme[`buttonGhost${status}TextColor` as ThemeKey]};

    &:focus {
      outline: none;
      ${outlineShadow(theme.buttonOutlineWidth, theme.buttonOutlineColor, true)}
    }

    &:focus,
    &.focus {
      background-color: ${theme[`buttonGhost${status}FocusBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonGhost${status}FocusBorderColor` as ThemeKey]};
      color: ${theme[`buttonGhost${status}FocusTextColor` as ThemeKey]};
    }
    &:hover,
    &.hover {
      background-color: ${theme[`buttonGhost${status}HoverBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonGhost${status}HoverBorderColor` as ThemeKey]};
      color: ${theme[`buttonGhost${status}HoverTextColor` as ThemeKey]};
    }
    &:active,
    &.active,
    &:active:focus {
      background-color: ${theme[`buttonGhost${status}ActiveBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonGhost${status}ActiveBorderColor` as ThemeKey]};
      color: ${theme[`buttonGhost${status}ActiveTextColor` as ThemeKey]};
    }

    &:disabled,
    &.disabled {
      background-color: ${theme[`buttonGhost${status}DisabledBackgroundColor` as ThemeKey]};
      border-color: ${theme[`buttonGhost${status}DisabledBorderColor` as ThemeKey]};
      color: ${theme[`buttonGhost${status}DisabledTextColor` as ThemeKey]};
    }
  `}
`;
const hero = css<ButtonTypes>`
  ${({ status, size, theme }) => {
    const leftColor = theme[`buttonHero${status}LeftBackgroundColor` as ThemeKey];
    const rightColor = theme[`buttonHero${status}RightBackgroundColor` as ThemeKey];
    const bevel = `${theme.buttonHeroBevelSize} ${theme[`buttonHero${status}BevelColor` as ThemeKey]}`;
    const glow = `${theme.buttonHeroGlowSize} ${theme[`buttonHero${status}GlowColor` as ThemeKey]}`;
    const shadow = theme.buttonHeroShadow;
    const heroBoxShadows = `${bevel}, ${glow}, ${shadow}`;
    const leftFocusColor = theme[`buttonHero${status}FocusLeftBackgroundColor` as ThemeKey];
    const rightFocusColor = theme[`buttonHero${status}FocusRightBackgroundColor` as ThemeKey];
    const leftHoverColor = theme[`buttonHero${status}HoverLeftBackgroundColor` as ThemeKey];
    const rightHoverColor = theme[`buttonHero${status}HoverRightBackgroundColor` as ThemeKey];
    const leftActiveColor = theme[`buttonHero${status}ActiveLeftBackgroundColor` as ThemeKey];
    const rightActiveColor = theme[`buttonHero${status}ActiveRightBackgroundColor` as ThemeKey];
    return css`
      text-shadow: ${theme.buttonHeroTextShadow};
      text-transform: ${theme.buttonHeroTextTransform};
      padding: ${theme[`buttonHero${size}Padding` as ThemeKey]};
      color: ${theme[`buttonHero${status}TextColor` as ThemeKey]};
      background-image: linear-gradient(to right, ${leftColor}, ${rightColor});
      border: none;
      box-shadow: ${heroBoxShadows};

      &:focus,
      &.focus {
        background-image: linear-gradient(to right, ${leftFocusColor}, ${rightFocusColor});
        box-shadow: ${heroBoxShadows}, 0 0 0 ${theme.buttonHeroOutlineWidth} ${theme.buttonHeroOutlineColor};
      }
      &:hover,
      &.hover {
        background-image: linear-gradient(to right, ${leftHoverColor}, ${rightHoverColor});
      }
      &:active,
      &.active,
      &:active:focus {
        background-image: linear-gradient(to right, ${leftActiveColor}, ${rightActiveColor});
      }

      &:disabled,
      &.disabled {
        background-image: none;
        background-color: ${theme[`buttonHero${status}DisabledBackgroundColor` as ThemeKey]};
        color: ${theme[`buttonHero${status}DisabledTextColor` as ThemeKey]};
      }
    `;
  }}
`;

const appearances = {
  filled,
  hero,
  ghost,
  outline,
};

const ButtonStyle = css<ButtonTypes>`
  ${({ theme, shape, size, status, fullWidth, pulse, appearance }) => css`
    letter-spacing: 0.4px;
    transition: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;

    cursor: ${theme.buttonCursor};
    font-family: ${theme.buttonTextFontFamily};
    font-weight: ${theme.buttonTextFontWeight};
    

    &:hover,
    &:focus {
      text-decoration: none;
    }

    ${
      size &&
      css`
        font-size: ${theme[`button${size}TextFontSize` as ThemeKey]};
        line-height: ${theme[`button${size}TextLineHeight` as ThemeKey]};
      `
    }

    ${
      shape &&
      css`
        border-radius: ${theme[`button${shape}BorderRadius` as ThemeKey]};
      `
    }

    ${pulse && btnPulse(theme[`buttonHero${status}LeftBackgroundColor` as ThemeKey])}

    ${fullWidth && 'width: 100%;'}

    &.transitions {
      ${componentAnimation('background-color, border-color, box-shadow, color')}
    }
    
    ${appearance && appearances[appearance]}
  `}
`;

const Button = styled.button<ButtonTypes>`
  ${ButtonStyle}
`;

const ButtonLink = styled.a<ButtonTypes>`
  ${ButtonStyle}
`;

const defaultProps: ButtonTypes = {
  size: 'Medium',
  status: 'Primary',
  appearance: 'filled',
  shape: 'Rectangle',
};

Button.defaultProps = defaultProps;
ButtonLink.defaultProps = defaultProps;

export { Button, ButtonLink, ButtonStyle };
