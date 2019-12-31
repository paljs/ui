/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { maxContainer, breakpointUp, getGridGutter, BreakPointKeys } from '../../theme/breakpoints';

const width = css<{ fluid?: boolean }>`
  ${({ fluid }) =>
    !fluid &&
    (Object.keys(maxContainer) as Array<BreakPointKeys>).map(
      key => breakpointUp(key as BreakPointKeys)`
        max-width: ${maxContainer[key]}px;
      `,
    )}
`;

const Container = styled.div`
  ${({ theme }) => css`
    padding-right: ${getGridGutter(theme) / 2}px;
    padding-left: ${getGridGutter(theme) / 2}px;
  `}
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  ${width}
`;

export default Container;
