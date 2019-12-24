/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';
import styled, { css } from '../../theme/styled-components';
import {
  breakpointUp,
  getGridSize,
  breakpoints,
  getGridGutter
} from '../../theme/breakpoints';

const valueType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
const BP = Object.keys(breakpoints);
const offsetProps = BP.map(d => d + 'Offset');
const DimensionPropTypes = BP.reduce((propTypes, dimension) => {
  propTypes[dimension] = valueType;
  propTypes[dimension + 'Offset'] = PropTypes.number;
  return propTypes;
}, {});

const colData = css`
  ${p =>
    Object.keys(p)
      .filter(k => ~BP.indexOf(k))
      .sort((k1, k2) => BP.indexOf(k1) - BP.indexOf(k2))
      .map(k => {
        if (Number.isInteger(p[k])) {
          return breakpointUp(k)`
            flex: 0 0 ${(100 / getGridSize(p.theme)) * p[k]}%;
            max-width: ${(100 / getGridSize(p.theme)) * p[k]}%;
            display: block;`;
        } else if (p[k]) {
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
const offset = css`
  ${p =>
    Object.keys(p)
      .filter(k => ~offsetProps.indexOf(k))
      .map(
        k =>
          breakpointUp(k.replace(/Offset$/, ''))`
          margin-${p.theme.dir == 'rtl' ? 'right' : 'left'}: 
          ${(100 / getGridSize(p.theme)) * p[k]}%;`
      )}
`;
const Col = styled.div`
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

Col.propTypes = {
  ...DimensionPropTypes,
  first: PropTypes.bool,
  last: PropTypes.bool,
  order: PropTypes.number,
  children: PropTypes.node
};

export default Col;
