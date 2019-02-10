/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React, { useEffect, useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import TooltipStyle from './style';
import { trigger, placement, statusArray } from '../types';

function Tooltip(props) {
  const [parent, setParent] = useState();
  const [position, setPosition] = useState();
  const [show, setShow] = useState(false);

  const overlayRef = useRef();
  const targetRef = useRef();

  useEffect(
    () => {
      const positionHandle = () => {
        const rect = targetRef.current.getBoundingClientRect();
        const overlayData = overlayRef.current.getBoundingClientRect();

        const placement = {
          top: {
            top: rect.top - overlayData.height,
            left: rect.left + rect.width / 2 - overlayData.width / 2
          },
          bottom: {
            top: rect.top + rect.height,
            left: rect.left + rect.width / 2 - overlayData.width / 2
          },
          right: {
            top: rect.top + rect.height / 2 - overlayData.height / 2,
            left: rect.left + rect.width
          },
          left: {
            top: rect.top + rect.height / 2 - overlayData.height / 2,
            left: rect.left - overlayData.width
          }
        };

        setPosition(placement);
      };

      if (!parent) {
        const overlayParent = document.getElementById('overlay-container');
        setParent(overlayParent);
      } else if (show) {
        positionHandle();
        window.addEventListener('resize', positionHandle);
        document
          .querySelector('.scrollable-container')
          .addEventListener('scroll', positionHandle);
      }

      return () => {
        window.removeEventListener('resize', positionHandle);
        document
          .querySelector('.scrollable-container')
          .removeEventListener('scroll', positionHandle);
      };
    },
    [parent, show, overlayRef.current]
  );

  return (
    <Fragment>
      {parent !== undefined &&
        show &&
        ReactDOM.createPortal(
          <TooltipStyle
            position={position}
            placement={props.placement}
            status={props.status}
          >
            <div className="overlay-pane" ref={overlayRef}>
              <div className="tooltip">
                <span className="arrow" />
                <div className="content">
                  {props.icon && <i className={'icon ' + props.icon} />}
                  {props.content && <span>{props.content}</span>}
                </div>
              </div>
            </div>
          </TooltipStyle>,
          parent
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
