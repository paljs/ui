/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React, { useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import TooltipStyle from './style';
import { trigger, placement, statusArray } from '../types';
import usePopoverPosition from '../popoverPosition';

function Tooltip(props) {
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
          <TooltipStyle
            position={position}
            placement={placement}
            status={props.status}
          >
            <div
              className="overlay-pane"
              style={position && { top: position.top, left: position.left }}
              ref={overlayRef}
            >
              <div className="tooltip">
                <span className="arrow" />
                <div className="content">
                  {props.icon && <i className={'icon ' + props.icon} />}
                  {props.content && <span>{props.content}</span>}
                </div>
              </div>
            </div>
          </TooltipStyle>,
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

Tooltip.propTypes = {
  eventListener: PropTypes.string,
  trigger: trigger.isRequired,
  placement: placement.isRequired,
  status: PropTypes.oneOf(statusArray),
  icon: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};
export default Tooltip;
