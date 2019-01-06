import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  breakpointUp,
  gridGutter,
  breakpoints,
  gridSize
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
          return breakpointUp(k)`flex: 0 0 ${(100 / gridSize) * p[k]}%;
        max-width: ${(100 / gridSize) * p[k]}%;
        display: block;`;
        } else if (p[k]) {
          return breakpointUp(
            k
          )`flex-grow: 1;flex-basis: 0;max-width: 100%;display: block;`;
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
          breakpointUp(k.replace(/Offset$/, ''))`margin-${({ theme }) =>
            theme.dir == 'rtl' ? 'right' : 'left'}: ${(100 / gridSize) *
            p[k]}%;`
      )}
`;
const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${gridGutter / 2}px;
  padding-left: ${gridGutter / 2}px;
  ${colData}
  ${offset}
  ${p => p.first && 'order: -1;'}
  ${p => p.last && `order: ${gridSize + 1};`}
  ${p => p.order && `order: ${p.order};`}
`;

Col.propTypes = {
  ...DimensionPropTypes,
  first: PropTypes.bool,
  last: PropTypes.bool,
  order: PropTypes.number,
  children: PropTypes.node
};

export default Col;
