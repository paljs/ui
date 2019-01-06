import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpointUp, gridGutter, breakpoints } from '../../theme/breakpoints';

const valueType = PropTypes.oneOf(Object.keys(breakpoints));

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) =>
    theme.gutter
      ? css`
          margin-right: ${theme.gutter / -2}px;
          margin-left: ${theme.gutter / -2}px;
        `
      : css`
          margin-right: ${gridGutter / -2}px;
          margin-left: ${gridGutter / -2}px;
        `}

  ${p =>
    p.reverse &&
    `
    flex-direction: row-reverse;
  `}

  ${p =>
    p.start &&
    breakpointUp(p.start)`
    justify-content: flex-start;
  `}

  ${p =>
    p.center &&
    breakpointUp(p.center)`
    justify-content: center;
  `}

  ${p =>
    p.end &&
    breakpointUp(p.end)`
    justify-content: flex-end;
  `}

  ${p =>
    p.top &&
    breakpointUp(p.top)`
    align-items: flex-start;
  `}

  ${p =>
    p.middle &&
    breakpointUp(p.middle)`
    align-items: center;
  `}

  ${p =>
    p.bottom &&
    breakpointUp(p.bottom)`
    align-items: flex-end;
  `}

  ${p =>
    p.around &&
    breakpointUp(p.around)`
    justify-content: space-around;
  `}

  ${p =>
    p.between &&
    breakpointUp(p.between)`
    justify-content: space-between;
  `}
`;

Row.propTypes = {
  reverse: PropTypes.bool,
  start: valueType,
  center: valueType,
  end: valueType,
  top: valueType,
  middle: valueType,
  bottom: valueType,
  around: valueType,
  between: valueType,
  children: PropTypes.node
};

export default Row;
