import styled, { css } from 'styled-components';
import { breakpointUp } from 'oah-ui';

interface BoxProps {
  nested?: boolean;
  container?: boolean;
  row?: boolean;
  large?: boolean;
}

const Box = styled.div<BoxProps>`
  ${({ theme, nested, container, row, large }) => css`
    position: relative;
    box-sizing: border-box;
    min-height: 1rem;
    overflow: hidden;
    text-align: center;
    background: ${theme.colorBasic1100};
    padding: 0.75rem 0.25rem;
    border-radius: 0.25rem;
    ${large && 'height: 8rem;'};
    ${row && 'margin-bottom: 1rem  !important;'};
    ${container && 'padding: .5em;'};
    ${nested && `background-color: ${theme.colorBasic100};`};
    ${breakpointUp('md')`
    padding: 1rem;
  `}
  `}
`;
export default Box;
