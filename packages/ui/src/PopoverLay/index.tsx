/* eslint-disable @typescript-eslint/no-empty-function */
/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import { usePopoverPosition } from '../utils';
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
}

interface ContextProps {
  positionHandle: () => void;
  hide: () => void;
  children?: React.ReactNode;
}

const initialContext: ContextProps = {
  positionHandle() {},
  hide() {},
};

export const OverLayContext: React.Context<ContextProps> = React.createContext(initialContext);
const Overlay: React.FC<OverlayProps> = (props) => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { position, placement, show, setShow, positionHandle } = usePopoverPosition(props, targetRef, overlayRef);

  let timeOut: NodeJS.Timeout;
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
            <OverLayContext.Provider value={{ positionHandle, hide: () => setShow(false) }}>
              <div
                className="overlay-pane"
                style={position && { top: position.top, left: position.left }}
                ref={overlayRef}
                onClick={(e) => e.stopPropagation()}
                {...overlayMouse}
              >
                {props.children}
              </div>
            </OverLayContext.Provider>
          </OverlayStyle>,
          document.getElementById('overlay-container')!,
        )}
      <div style={props.style} className={props.className} ref={targetRef} {...targetMouse}>
        {props.target}
      </div>
    </>
  );
};

export default Overlay;
