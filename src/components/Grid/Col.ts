/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { breakpointUp, getGridSize, breakpoints, getGridGutter, BreakPointKeys } from '../../theme/breakpoints';
import { Record } from '../types';

const BP = Object.keys(breakpoints);
const offsetProps = ['xsOffset', 'isOffset', 'smOffset', 'mdOffset', 'lgOffset', 'xlOffset', 'xxlOffset', 'xxxlOffset'];

const colData = css<ColProps>`
  ${p =>
    (Object.keys(p) as Array<keyof typeof p>)
      .filter(k => ~BP.indexOf(k))
      .sort((k1, k2) => BP.indexOf(k1) - BP.indexOf(k2))
      .map(k => {
        if (typeof p[k] === 'number') {
          return breakpointUp(k as BreakPointKeys)`
            flex: 0 0 ${(100 / getGridSize(p.theme)) * (p[k] as number)}%;
            max-width: ${(100 / getGridSize(p.theme)) * (p[k] as number)}%;
            display: block;`;
        } else if (p[k]) {
          return breakpointUp(k as BreakPointKeys)`
            flex-grow: 1;
            flex-basis: 0;
            max-width: 100%;
            display: block;`;
        } else {
          return breakpointUp(k as BreakPointKeys)`display: none;`;
        }
      })}
`;

const offset = css<ColProps>`
  ${p =>
    (Object.keys(p) as Array<keyof typeof p>)
      .filter(k => ~offsetProps.indexOf(k))
      .map(
        k =>
          breakpointUp(k.replace(/Offset$/, '') as BreakPointKeys)`
          margin-${p.theme.dir == 'rtl' ? 'right' : 'left'}: 
          ${(100 / getGridSize(p.theme)) * (p[k] as number)}%;`,
      )}
`;

const Col = styled.div<ColProps>`
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

type OffsetPoints =
  | 'xsOffset'
  | 'isOffset'
  | 'smOffset'
  | 'mdOffset'
  | 'lgOffset'
  | 'xlOffset'
  | 'xxlOffset'
  | 'xxxlOffset';

interface ColProps extends Record<BreakPointKeys, number | boolean>, Record<OffsetPoints, number> {
  first?: boolean;
  last?: boolean;
  order?: number;
}

export default Col;
