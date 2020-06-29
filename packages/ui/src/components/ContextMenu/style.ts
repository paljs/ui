import styled, { css } from 'styled-components';
import { MenuStyle } from '../Menu/style';

const ContextMenuStyle = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.contextMenuBackgroundColor};
    border-color: ${theme.contextMenuBorderColor};
    border-style: ${theme.contextMenuBorderStyle};
    border-width: ${theme.contextMenuBorderWidth};
    border-radius: ${theme.contextMenuBorderRadius};
    box-shadow: ${theme.contextMenuShadow};
    min-width: ${theme.contextMenuMinWidth};
    max-width: ${theme.contextMenuMaxWidth};

    ${MenuStyle} {
      border-radius: ${theme.contextMenuBorderRadius};
      overflow: hidden;
      text-align: center;
    }
  `}
`;

export default ContextMenuStyle;
