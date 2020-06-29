/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import PopoverStyle from './style';
import Overlay from '../PopoverLay';
import { Trigger, Placement } from '../types';

const Popover: React.FC<PopoverProps> = (props) => {
  const arrowSize = parseInt(props.theme.popoverArrowSize as string);
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
      arrowSize={props.theme.popoverArrowSize as string}
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
  theme: DefaultTheme;
}
const PopoverWithTheme = withTheme(Popover);

const Popover2: React.FC<Omit<PopoverProps, 'theme'>> = (props) => {
  return <PopoverWithTheme {...props} />;
};

export default Popover2;
