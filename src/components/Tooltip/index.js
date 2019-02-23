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
              onClick={e => e.stopPropagation()}
              onMouseEnter={() => trigger === 'hover' && onMouseEnter()}
              onMouseLeave={() => trigger === 'hover' && onMouseLeave()}
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
