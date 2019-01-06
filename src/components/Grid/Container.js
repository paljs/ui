import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  maxContainer,
  breakpointUp,
  gridGutter
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
  ${({ theme }) =>
    theme.gutter
      ? css`
          padding-right: ${theme.gutter / 2}px;
          padding-left: ${theme.gutter / 2}px;
        `
      : css`
          padding-right: ${gridGutter / 2}px;
          padding-left: ${gridGutter / 2}px;
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
