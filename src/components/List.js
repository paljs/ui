import styled, { css } from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
`;
const ListItem = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.listItemBorderColor};
    padding: ${theme.listItemPadding};
    flex-shrink: 0;

    &:first-child {
      border-top: 1px solid ${theme.listItemBorderColor};
    }
  `}
`;
export { List, ListItem };
