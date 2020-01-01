/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import usePopoverPosition from '../popoverPosition';
import { Trigger, Placement } from '../types';
import { OverlayStyle } from './style';

interface OverlayProps {
  children: React.ReactNode;
  target: React.ReactNode;
  eventListener?: string;
  trigger: Trigger;
  placement: Placement;
  style?: React.CSSProperties;
  className?: string;
  transformSize: number;
  arrowRound: number;
  arrowSize: string;
}

const Overlay: React.FC<OverlayProps> = props => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { position, placement, show, setShow } = usePopoverPosition(props, targetRef, overlayRef);

  let timeOut: number;
  const onMouseLeave = () => {
    timeOut = setTimeout(() => {
      setShow(false);
    }, 500);
  };

  const onMouseEnter = () => {
    clearTimeout(timeOut);
  };

  const { trigger, transformSize } = props;
  return (
    <>
      {show &&
        ReactDOM.createPortal(
          <OverlayStyle
            position={!!position}
            placement={placement}
            size={transformSize}
            arrowRound={props.arrowRound}
            arrowSize={props.arrowSize}
          >
            <div
              className="overlay-pane"
              style={position && { top: position.top, left: position.left }}
              ref={overlayRef}
              onClick={e => e.stopPropagation()}
              onMouseEnter={() => trigger === 'hover' && onMouseEnter()}
              onMouseLeave={() => trigger === 'hover' && onMouseLeave()}
            >
              {props.children}
            </div>
          </OverlayStyle>,
          document.getElementById('overlay-container')!,
        )}
      <div
        style={props.style}
        className={props.className}
        ref={targetRef}
        onFocus={() => trigger === 'focus' && setShow(true)}
        onBlur={() => trigger === 'focus' && setShow(false)}
        onClick={e => {
          e.stopPropagation();
          trigger === 'click' && setShow(!show);
        }}
        onMouseEnter={() =>
          trigger === 'hint'
            ? setShow(true)
            : trigger === 'hover' && !show
            ? setShow(true)
            : trigger === 'hover' && onMouseEnter()
        }
        onMouseLeave={() => {
          trigger === 'hint' ? setShow(false) : trigger === 'hover' && onMouseLeave();
        }}
      >
        {props.target}
      </div>
    </>
  );
};

export default Overlay;
