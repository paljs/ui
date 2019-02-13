/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React, { useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import PopoverStyle from './style';
import { trigger, placement } from '../types';
import usePopoverPosition from '../popoverPosition';

function Popover(props) {
  const overlayRef = useRef();
  const targetRef = useRef();
  const [position, placement, show, setShow] = usePopoverPosition(
    props,
    targetRef,
    overlayRef
  );
  return (
    <Fragment>
      {show &&
        ReactDOM.createPortal(
          <PopoverStyle position={position} placement={placement}>
            <div
              className="overlay-pane"
              style={position && { top: position.top, left: position.left }}
              ref={overlayRef}
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
        onFocus={() => props.trigger === 'focus' && setShow(true)}
        onBlur={() => props.trigger === 'focus' && setShow(false)}
        onClick={() => props.trigger === 'click' && setShow(!show)}
        onMouseEnter={() => props.trigger === 'hover' && setShow(true)}
        onMouseLeave={() => props.trigger === 'hover' && setShow(false)}
      >
        {props.children}
      </div>
    </Fragment>
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
