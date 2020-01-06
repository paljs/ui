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
  trigger?: Trigger;
  placement: Placement;
  style?: React.CSSProperties;
  className?: string;
  transformSize: number;
  arrowRound?: number;
  arrowSize?: string;
  contextMenu?: boolean;
  ref?: React.RefObject<OverlayRefObject>;
}
export interface OverlayRefObject {
  hide: () => void;
}

const Overlay: React.RefForwardingComponent<OverlayRefObject, OverlayProps> = (props, ref) => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { position, placement, show, setShow } = usePopoverPosition(props, targetRef, overlayRef);

  React.useImperativeHandle(
    ref,
    () => ({
      hide() {
        setShow(false);
      },
    }),
    [show],
  );

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

  const overlayMouse = props.contextMenu
    ? {}
    : {
        onMouseEnter: () => trigger === 'hover' && onMouseEnter(),
        onMouseLeave: () => trigger === 'hover' && onMouseLeave(),
      };

  const targetMouse = props.contextMenu
    ? {
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          setShow(!show);
        },
      }
    : {
        onFocus: () => trigger === 'focus' && setShow(true),
        onBlur: () => trigger === 'focus' && setShow(false),
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          trigger === 'click' && setShow(!show);
        },
        onMouseEnter: () =>
          trigger === 'hint'
            ? setShow(true)
            : trigger === 'hover' && !show
            ? setShow(true)
            : trigger === 'hover' && onMouseEnter(),
        onMouseLeave: () => {
          trigger === 'hint' ? setShow(false) : trigger === 'hover' && onMouseLeave();
        },
      };

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
              {...overlayMouse}
            >
              {props.children}
            </div>
          </OverlayStyle>,
          document.getElementById('overlay-container')!,
        )}
      <div style={props.style} className={props.className} ref={targetRef} {...targetMouse}>
        {props.target}
      </div>
    </>
  );
};

export default React.forwardRef(Overlay);
