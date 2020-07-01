/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { maxContainer, breakpointUp, getGridGutter, BreakPointKeys } from '../breakpoints';

const width = css<{ fluid?: boolean }>`
  ${({ fluid }) =>
    !fluid &&
    (Object.keys(maxContainer) as Array<BreakPointKeys>).map(
      (key) => breakpointUp(key as BreakPointKeys)`
        max-width: ${maxContainer[key]}px;
      `,
    )}
`;

const ContainerStyle = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  ${({ theme }) => css`
    padding-right: ${getGridGutter(theme) / 2}px;
    padding-left: ${getGridGutter(theme) / 2}px;
  `}
  ${width}
`;
const Container: React.FC<{ fluid?: boolean }> = (props) => (
  <ContainerStyle {...props}>{props.children}</ContainerStyle>
);

export default Container;
