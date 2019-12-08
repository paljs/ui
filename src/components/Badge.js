/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { colorState, position } from './types';
import { getPhysicalPosition } from './positionHelper';

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
    let placement = getPhysicalPosition(theme.dir, position);
    switch (placement) {
      case 'topRight':
        return 'top: 0;right: 0;';
      case 'topLeft':
        return 'top: 0;left: 0;';
      case 'bottomRight':
        return 'bottom: 0;right: 0;';
      case 'bottomLeft':
        return 'bottom: 0;left: 0;';
    }
  }}
`;
Badge.defaultProps = {
  position: 'topEnd',
  status: 'Primary'
};

Badge.propTypes = {
  position,
  status: colorState
};
export default Badge;
