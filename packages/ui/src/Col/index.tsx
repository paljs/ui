/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointUp, getGridSize, breakpoints, getGridGutter, BreakPointKeys } from '../breakpoints';

const BP = Object.keys(breakpoints);

const colData = css<ColProps>`
  ${({ breakPoint, theme }) =>
    breakPoint &&
    (Object.keys(breakPoint) as Array<BreakPointKeys>)
      .sort((k1, k2) => BP.indexOf(k1) - BP.indexOf(k2))
      .map((k) => {
        if (typeof breakPoint[k] === 'number') {
          return breakpointUp(k)`
            flex: 0 0 ${(100 / getGridSize(theme)) * (breakPoint[k] as number)}%;
            max-width: ${(100 / getGridSize(theme)) * (breakPoint[k] as number)}%;
            display: block;`;
        } else if (breakPoint[k]) {
          return breakpointUp(k)`
            flex-grow: 1;
            flex-basis: 0;
            max-width: 100%;
            display: block;`;
        } else {
          return breakpointUp(k)`display: none;`;
        }
      })}
`;

const offset = css<ColProps>`
  ${({ offset, theme }) =>
    offset &&
    (Object.keys(offset) as Array<BreakPointKeys>).map(
      (k) =>
        breakpointUp(k)`
          margin-${theme.dir == 'rtl' ? 'right' : 'left'}: 
          ${(100 / getGridSize(theme)) * (offset[k] as number)}%;`,
    )}
`;

const ColStyle = styled.div<ColProps>`
  ${({ theme, first, last, order }) => css`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${getGridGutter(theme) / 2}px;
  padding-left: ${getGridGutter(theme) / 2}px;
  ${colData}
  ${offset}
  ${first && 'order: -1;'}
  ${last && `order: ${getGridSize(theme) + 1};`}
  ${order && `order: ${order};`}
`}
`;

interface ColProps {
  first?: boolean;
  last?: boolean;
  order?: number;
  offset?: Partial<Record<BreakPointKeys, number>>;
  breakPoint?: Partial<Record<BreakPointKeys, number | boolean>>;
  style?: React.CSSProperties;
  className?: string;
}

const Col: React.FC<ColProps> = (props) => <ColStyle {...props}>{props.children}</ColStyle>;

export default Col;
