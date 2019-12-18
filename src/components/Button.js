/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { buttonTypes } from './types';

const filled = css`
	${({ status, size, theme }) => css`
		border-style: ${theme.buttonFilledBorderStyle};
		border-width: ${theme.buttonFilledBorderWidth};
		text-transform: ${theme.buttonFilledTextTransform};
		padding: ${theme[`buttonFilled${size}Padding`]};
		background-color: ${theme[`buttonFilled${status}BackgroundColor`]};
		border-color: ${theme[`buttonFilled${status}BorderColor`]};
		color: ${theme[`buttonFilled${status}TextColor`]};

		&:focus {
			outline: none;
			box-shadow: 0 0 0 ${theme.buttonOutlineWidth} ${theme.buttonOutlineColor};
		}

		&:focus,
		&.focus {
			background-color: ${theme[`buttonFilled${status}FocusBackgroundColor`]};
			border-color: ${theme[`buttonFilled${status}FocusBorderColor`]};
		}
		&:hover,
		&.hover {
			background-color: ${theme[`buttonFilled${status}HoverBackgroundColor`]};
			border-color: ${theme[`buttonFilled${status}HoverBorderColor`]};
		}
		&:active,
		&.active,
		&:active:focus {
			background-color: ${theme[`buttonFilled${status}ActiveBackgroundColor`]};
			border-color: ${theme[`buttonFilled${status}ActiveBorderColor`]};
		}

		&:disabled,
		&.disabled {
			background-color: ${theme[
				`buttonFilled${status}DisabledBackgroundColor`
			]};
			border-color: ${theme[`buttonFilled${status}DisabledBorderColor`]};
			color: ${theme[`buttonFilled${status}DisabledTextColor`]};
		}
	`}
`;
const outline = css`
	${({ status, size, theme }) => css`
		border-style: ${theme.buttonOutlineBorderStyle};
		border-width: ${theme.buttonOutlineBorderWidth};
		text-transform: ${theme.buttonOutlineTextTransform};
		padding: ${theme[`buttonOutline${size}Padding`]};
		background-color: ${theme[`buttonOutline${status}BackgroundColor`]};
		border-color: ${theme[`buttonOutline${status}BorderColor`]};
		color: ${theme[`buttonOutline${status}TextColor`]};

		&:focus {
			outline: none;
			box-shadow: 0 0 0 ${theme.buttonOutlineWidth} ${theme.buttonOutlineColor};
			&:not(:hover):not(:active) {
				box-shadow: 0 0 0 ${theme.buttonOutlineWidth}
						${theme.buttonOutlineColor},
					inset 0 0 0 100vmax ${theme.buttonOutlineColor};
			}
		}

		&:focus,
		&.focus {
			background-color: ${theme[`buttonOutline${status}FocusBackgroundColor`]};
			border-color: ${theme[`buttonOutline${status}FocusBorderColor`]};
			color: ${theme[`buttonOutline${status}FocusTextColor`]};
		}
		&:hover,
		&.hover {
			background-color: ${theme[`buttonOutline${status}HoverBackgroundColor`]};
			border-color: ${theme[`buttonOutline${status}HoverBorderColor`]};
			color: ${theme[`buttonOutline${status}HoverTextColor`]};
		}
		&:active,
		&.active,
		&:active:focus {
			background-color: ${theme[`buttonOutline${status}ActiveBackgroundColor`]};
			border-color: ${theme[`buttonOutline${status}ActiveBorderColor`]};
			color: ${theme[`buttonOutline${status}ActiveTextColor`]};
		}

		&:disabled,
		&.disabled {
			background-color: ${theme[
				`buttonOutline${status}DisabledBackgroundColor`
			]};
			border-color: ${theme[`buttonOutline${status}DisabledBorderColor`]};
			color: ${theme[`buttonOutline${status}DisabledTextColor`]};
		}
	`}
`;
const ghost = css`
	${({ status, size, theme }) => css`
		background-color: ${theme.buttonGhostBackgroundColor};
		border-color: ${theme.buttonGhostBorderColor};
		border-style: ${theme.buttonGhostBorderStyle};
		border-width: ${theme.buttonGhostBorderWidth};
		text-transform: ${theme.buttonGhostTextTransform};
		padding: ${theme[`buttonGhost${size}Padding`]};
		color: ${theme[`buttonGhost${status}TextColor`]};

		&:focus {
			outline: none;
			box-shadow: 0 0 0 ${theme.buttonOutlineWidth} ${theme.buttonOutlineColor};
			&:not(:hover):not(:active) {
				box-shadow: 0 0 0 ${theme.buttonOutlineWidth}
						${theme.buttonOutlineColor},
					inset 0 0 0 100vmax ${theme.buttonOutlineColor};
			}
		}

		&:focus,
		&.focus {
			background-color: ${theme[`buttonGhost${status}FocusBackgroundColor`]};
			border-color: ${theme[`buttonGhost${status}FocusBorderColor`]};
			color: ${theme[`buttonGhost${status}FocusTextColor`]};
		}
		&:hover,
		&.hover {
			background-color: ${theme[`buttonGhost${status}HoverBackgroundColor`]};
			border-color: ${theme[`buttonGhost${status}HoverBorderColor`]};
			color: ${theme[`buttonGhost${status}HoverTextColor`]};
		}
		&:active,
		&.active,
		&:active:focus {
			background-color: ${theme[`buttonGhost${status}ActiveBackgroundColor`]};
			border-color: ${theme[`buttonGhost${status}ActiveBorderColor`]};
			color: ${theme[`buttonGhost${status}ActiveTextColor`]};
		}

		&:disabled,
		&.disabled {
			background-color: ${theme[`buttonGhost${status}DisabledBackgroundColor`]};
			border-color: ${theme[`buttonGhost${status}DisabledBorderColor`]};
			color: ${theme[`buttonGhost${status}DisabledTextColor`]};
		}
	`}
`;
const hero = css`
	${({ status, size, theme }) => {
		const constant = getConstant(theme, status);
		return css`
			text-shadow: ${theme.buttonHeroTextShadow};
			text-transform: ${theme.buttonHeroTextTransform};
			padding: ${theme[`buttonHero${size}Padding`]};
			color: ${theme[`buttonHero${status}TextColor`]};
			background-image: linear-gradient(
				to right,
				${constant.leftColor},
				${constant.rightColor}
			);
			border: none;
			box-shadow: ${constant.heroBoxShadows};

			&:focus,
			&.focus {
				background-image: linear-gradient(
					to right,
					${constant.leftFocusColor},
					${constant.rightFocusColor}
				);
				box-shadow: ${constant.heroBoxShadows},
					0 0 0 ${theme.buttonHeroOutlineWidth} ${theme.buttonHeroOutlineColor};
			}
			&:hover,
			&.hover {
				background-image: linear-gradient(
					to right,
					${constant.leftHoverColor},
					${constant.rightHoverColor}
				);
			}
			&:active,
			&.active,
			&:active:focus {
				background-image: linear-gradient(
					to right,
					${constant.leftActiveColor},
					${constant.rightActiveColor}
				);
			}

			&:disabled,
			&.disabled {
				background-image: none;
				background-color: ${theme[
					`buttonHero${status}DisabledBackgroundColor`
				]};
				color: ${theme[`buttonHero${status}DisabledTextColor`]};
			}
		`;
	}}
`;

const appearances = {
	filled,
	hero,
	ghost,
	outline
};

const ButtonStyle = css`
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

    color: ${theme.btnFg};
    cursor: ${theme.buttonCursor};
    font-family: ${theme.buttonTextFontFamily};
    font-weight: ${theme.buttonTextFontWeight};
    

    &:hover,
    &:focus {
      text-decoration: none;
    }

    ${size &&
			css`
				font-size: ${theme[`button${size}TextFontSize`]};
				line-height: ${theme[`button${size}TextLineHeight`]};
			`}

    ${shape &&
			css`
				border-radius: ${theme[`button${shape}BorderRadius`]};
			`}

    ${pulse && btnPulse(theme[`buttonHero${status}LeftBackgroundColor`])}

    ${fullWidth && 'width: 100%;'}

    &.transitions {
      transition-duration: 0.15s;
      transition-property: background-color, border-color, box-shadow, color;
      transition-timing-function: ease-in;
    }
    
    ${appearances[appearance]}
  `}
`;

const getConstant = (theme, status) => {
	return {
		leftColor: theme[`buttonHero${status}LeftBackgroundColor`],
		rightColor: theme[`buttonHero${status}RightBackgroundColor`],
		bevel: `${theme.buttonHeroBevelSize} ${
			theme[`buttonHero${status}BevelColor`]
		}`,
		glow: `${theme.buttonHeroGlowSize} ${
			theme[`buttonHero${status}GlowColor`]
		}`,
		shadow: theme.buttonHeroShadow,
		heroBoxShadows: `${this.bevel}, ${this.glow}, ${this.shadow}`,
		leftFocusColor: theme[`buttonHero${status}FocusLeftBackgroundColor`],
		rightFocusColor: theme[`buttonHero${status}FocusRightBackgroundColor`],
		leftHoverColor: theme[`buttonHero${status}HoverLeftBackgroundColor`],
		rightHoverColor: theme[`buttonHero${status}HoverRightBackgroundColor`],
		leftActiveColor: theme[`buttonHero${status}ActiveLeftBackgroundColor`],
		rightActiveColor: theme[`buttonHero${status}ActiveRightBackgroundColor`]
	};
};

const btnPulse = color => {
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

const defaultProps = {
	size: 'Medium',
	status: 'Primary'
};

const Button = styled.button`
	${ButtonStyle}
`;

Button.defaultProps = defaultProps;
Button.propTypes = buttonTypes;

const ButtonLink = styled.a`
	${ButtonStyle}
`;

ButtonLink.defaultProps = defaultProps;
ButtonLink.propTypes = buttonTypes;

const ButtonInput = styled.input`
	&[type='button'],
	&[type='submit'] {
		${ButtonStyle}
	}
`;

ButtonInput.defaultProps = { ...defaultProps, type: 'button' };
ButtonInput.propTypes = {
	...buttonTypes,
	type: PropTypes.oneOf(['button', 'submit'])
};

export { Button, ButtonLink, ButtonInput, ButtonStyle };
