/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
`;
const ListItem = styled.div`
  ${({ theme }) => css`
    border-bottom: ${theme.listItemDividerWidth} ${theme.listItemDividerStyle} ${theme.listItemDividerColor};
    color: ${theme.listItemTextColor};
    font-family: ${theme.listItemFontFamily};
    font-size: ${theme.listItemFontSize};
    font-weight: ${theme.listItemFontWeight};
    line-height: ${theme.listItemLineHeight};
    padding: ${theme.listItemPadding};
    display: flex;
    align-items: center;
    flex-shrink: 0;

    &:first-child {
      border-top: ${theme.listItemDividerWidth} ${theme.listItemDividerStyle} ${theme.listItemDividerColor};
    }
  `}
`;
export { List, ListItem };
