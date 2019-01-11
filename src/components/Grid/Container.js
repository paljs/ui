import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  maxContainer,
  breakpointUp,
  getGridGutter
} from '../../theme/breakpoints';

const width = css`
  ${p =>
    !p.fluid &&
    Object.keys(maxContainer).map(
      key => breakpointUp(key)`
        max-width: ${maxContainer[key]}px;
      `
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

Container.propTypes = {
  fluid: PropTypes.bool,
  gutter: PropTypes.number,
  children: PropTypes.node
};

export default Container;
