/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import TooltipStyle from './style';
import { Trigger, Placement, Status, IconField } from '../types';
import { ItemIcon } from '../Icon';
import Overlay from '../PopoverLay';

const Tooltip: React.FC<TooltipProps> = (props) => {
  const arrowSize = 6;
  const arrowRound = Math.round(-arrowSize - arrowSize / 2.5);
  return (
    <Overlay
      target={props.children}
      placement={props.placement}
      trigger={props.trigger}
      style={props.style}
      className={props.className}
      eventListener={props.eventListener}
      transformSize={5}
      arrowRound={arrowRound}
      arrowSize={arrowSize.toString() + 'px'}
    >
      <TooltipStyle status={props.status} arrowSize={arrowSize.toString() + 'px'}>
        <span className="arrow" />
        <div className="content">
          {props.icon && <ItemIcon className="icon" icon={props.icon} />}
          {props.content && <span>{props.content}</span>}
        </div>
      </TooltipStyle>
    </Overlay>
  );
};

interface TooltipProps {
  eventListener?: string;
  trigger: Trigger;
  placement: Placement;
  status?: Status;
  icon?: IconField;
  content?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default Tooltip;
