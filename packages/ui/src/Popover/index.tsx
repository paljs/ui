/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { ThemeContext } from 'styled-components';
import PopoverStyle from './style';
import Overlay from '../PopoverLay';
import { Trigger, Placement } from '../types';

const Popover: React.FC<PopoverProps> = (props) => {
  const theme = React.useContext(ThemeContext);
  const arrowSize = parseInt(theme.popoverArrowSize as string);
  const arrowRound = Math.round(-arrowSize - arrowSize / 2);
  return (
    <Overlay
      target={props.children}
      placement={props.placement}
      trigger={props.trigger}
      style={props.style}
      className={props.className}
      eventListener={props.eventListener}
      transformSize={15}
      arrowRound={arrowRound}
      arrowSize={theme.popoverArrowSize as string}
    >
      <PopoverStyle>
        <span className="arrow" />
        {typeof props.overlay === 'string' ? <div className="primitive-overlay">{props.overlay}</div> : props.overlay}
      </PopoverStyle>
    </Overlay>
  );
};

export interface PopoverProps {
  eventListener?: string;
  trigger: Trigger;
  placement: Placement;
  overlay: any;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default Popover;
