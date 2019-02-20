import styled, { css } from 'styled-components';
import { breakpointUp } from 'oah-ui/theme';
const Box = styled.div`
  ${({ theme, nested, container, row, large }) => css`
    position: relative;
    box-sizing: border-box;
    min-height: 1rem;
    overflow: hidden;
    text-align: center;
    background: ${theme.colorGray};
    padding: 0.75rem 0.25rem;
    border-radius: 0.25rem;
    ${large && 'height: 8rem;'};
    ${row && 'margin-bottom: 1rem  !important;'};
    ${container && 'padding: .5em;'};
    ${nested && `background-color: ${theme.colorFg};`};
    ${breakpointUp('md')`
    padding: 1rem;
  `}
  `}
`;
export default Box;
