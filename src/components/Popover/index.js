/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import PopoverStyle from './style';
import { trigger, placement } from '../types';
import usePopoverPosition from '../popoverPosition';

function Popover(props) {
  const overlayRef = React.useRef();
  const targetRef = React.useRef();
  const [position, placement, show, setShow] = usePopoverPosition(
    props,
    targetRef,
    overlayRef
  );
  let timeOut;
  const onMouseLeave = () => {
    timeOut = setTimeout(() => {
      setShow(false);
    }, 500);
  };

  const onMouseEnter = () => {
    clearTimeout(timeOut);
  };
  const { trigger } = props;
  return (
    <>
      {show &&
        ReactDOM.createPortal(
          <PopoverStyle position={position} placement={placement}>
            <div
              className="overlay-pane"
              style={position && { top: position.top, left: position.left }}
              ref={overlayRef}
              onClick={e => e.stopPropagation()}
              onMouseEnter={() => trigger === 'hover' && onMouseEnter()}
              onMouseLeave={() => trigger === 'hover' && onMouseLeave()}
            >
              <div className="popover">
                <span className="arrow" />
                {typeof props.overlay === 'string' ? (
                  <div className="primitive-overlay">{props.overlay}</div>
                ) : (
                  props.overlay
                )}
              </div>
            </div>
          </PopoverStyle>,
          document.getElementById('overlay-container')
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
          trigger === 'hint'
            ? setShow(false)
            : trigger === 'hover' && onMouseLeave();
        }}
      >
        {props.children}
      </div>
    </>
  );
}

Popover.propTypes = {
  eventListener: PropTypes.string,
  trigger: trigger.isRequired,
  placement: placement.isRequired,
  overlay: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};
export default Popover;
