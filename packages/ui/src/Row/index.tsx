/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointUp, getGridGutter, BreakPointKeys } from '../breakpoints';

const RowStyle = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  ${(p) => css`
    margin-right: ${getGridGutter(p.theme) / -2}px;
    margin-left: ${getGridGutter(p.theme) / -2}px;
    ${p.reverse && 'flex-direction: row-reverse;'}
  
    ${
      p.start &&
      breakpointUp(p.start)`
      justify-content: flex-start;
    `
    }
  
    ${
      p.center &&
      breakpointUp(p.center)`
      justify-content: center;
    `
    }
  
    ${
      p.end &&
      breakpointUp(p.end)`
      justify-content: flex-end;
    `
    }
  
    ${
      p.top &&
      breakpointUp(p.top)`
      align-items: flex-start;
    `
    }
  
    ${
      p.middle &&
      breakpointUp(p.middle)`
      align-items: center;
    `
    }
  
    ${
      p.bottom &&
      breakpointUp(p.bottom)`
      align-items: flex-end;
    `
    }
  
    ${
      p.around &&
      breakpointUp(p.around)`
      justify-content: space-around;
    `
    }
  
    ${
      p.between &&
      breakpointUp(p.between)`
      justify-content: space-between;
    `
    }
  `}
`;

type FlexProps = 'start' | 'center' | 'end' | 'top' | 'middle' | 'bottom' | 'around' | 'between';

interface RowProps extends Partial<Record<FlexProps, BreakPointKeys>> {
  reverse?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Row: React.FC<RowProps> = (props) => <RowStyle {...props}>{props.children}</RowStyle>;

export default Row;
