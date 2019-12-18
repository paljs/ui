/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { status, size } from '../types';
import { getHeadings } from '../Shared';

const headerBg = css`
	${({ theme, status }) => css`
		padding: ${theme.cardPadding};
		border-bottom: ${theme.cardDividerWidth} ${theme.cardDividerStyle}
			${theme.cardDividerColor};
		border-top-left-radius: ${theme.cardBorderRadius};
		border-top-right-radius: ${theme.cardBorderRadius};
		color: ${theme.cardHeaderTextColor};
		font-family: ${theme.cardHeaderTextFontFamily};
		font-size: ${theme.cardHeaderTextFontSize};
		font-weight: ${theme.cardHeaderTextFontWeight};
		line-height: ${theme.cardHeaderTextLineHeight};

		${getHeadings}

		${status &&
			css`
				background-color: ${theme[`cardHeader${status}BackgroundColor`]};
				border-bottom-color: ${theme[`cardHeader${status}BackgroundColor`]};
				border-bottom-width: 0;
				color: ${theme[`cardHeader${status}TextColor`]};
				a,
				a:hover {
					color: ${theme[`cardHeader${status}TextColor`]};
				}
			`}
	`};
	${({ accent }) => (accent ? 'border-radius: 0' : '')};
`;

const Card = styled.div`
	${({ theme, accent, size }) => css`
		display: flex;
		flex-direction: column;
		background-color: ${theme.cardBackgroundColor};
		border: ${theme.cardBorderWidth} ${theme.cardBorderStyle}
			${theme.cardBorderColor};
		border-radius: ${theme.cardBorderRadius};
		box-shadow: ${theme.cardShadow};
		color: ${theme.cardTextColor};
		font-family: ${theme.cardTextFontFamily};
		font-size: ${theme.cardTextFontSize};
		font-weight: ${theme.cardTextFontWeight};
		line-height: ${theme.cardTextLineHeight};
		margin-bottom: ${theme.cardMarginBottom};

		${accent &&
			css`
				border-top-color: ${theme[`cardHeader${accent}BackgroundColor`]};
				border-top-style: ${theme.cardBorderStyle};
				border-top-width: ${theme.cardBorderRadius};
			`}

		${size &&
			css`
				height: ${theme[`cardHeight${size}`]};
			`}

    & > header {
			${headerBg}
		}
		& > footer {
			padding: ${theme.cardPadding};
			border-top: ${theme.cardDividerWidth} ${theme.cardDividerStyle}
				${theme.cardDividerColor};
			border-bottom-left-radius: ${theme.cardBorderRadius};
			border-bottom-right-radius: ${theme.cardBorderRadius};
		}
	`};
`;
Card.propTypes = {
	status,
	accent: status,
	size
};
const CardBody = styled.div`
	padding: ${({ theme }) => theme.cardPadding};
	overflow: auto;
	flex: 1;
	-ms-flex: 1 1 auto;
	position: relative;
`;

export { Card, CardBody };
