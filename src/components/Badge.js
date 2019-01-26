/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { colorState, position } from './types';

const Badge = styled.span`
  ${({ theme, status }) => css`
    color: ${theme.badgeFgText};
    position: absolute;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    background-color: ${theme['badge' + status + 'BgColor']};
  `}
  ${({ position, theme }) => {
    switch (position) {
      case 'topRight':
        return 'top: 0;right: 0;';
      case 'topLeft':
        return 'top: 0;left: 0;';
      case 'bottomRight':
        return 'bottom: 0;right: 0;';
      case 'bottomLeft':
        return 'bottom: 0;left: 0;';
      case 'topStart':
        return 'top: 0;' + (theme.dir === 'rtl' ? 'right: 0;' : 'left: 0;');
      case 'topEnd':
        return 'top: 0;' + (theme.dir === 'rtl' ? 'left: 0;' : 'right: 0;');
      case 'bottomStart':
        return 'bottom: 0;' + (theme.dir === 'rtl' ? 'right: 0;' : 'left: 0;');
      case 'bottomEnd':
        return 'bottom: 0;' + (theme.dir === 'rtl' ? 'left: 0;' : 'right: 0;');
    }
  }}
`;
Badge.propTypes = {
  position,
  status: colorState
};
export default Badge;
