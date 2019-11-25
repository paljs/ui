/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import ContextMenuStyle from './style';
import { placement, menuItemsType } from '../types';
import usePopoverPosition from '../popoverPosition';
import Menu from '../Menu';

function ContextMenu(props) {
  const overlayRef = React.useRef();
  const targetRef = React.useRef();
  const [position, placement, show, setShow] = usePopoverPosition(
    props,
    targetRef,
    overlayRef
  );

  return (
    <>
      {show &&
        ReactDOM.createPortal(
          <ContextMenuStyle position={position} placement={placement}>
            <div
              className="overlay-pane"
              style={position && { top: position.top, left: position.left }}
              ref={overlayRef}
              onClick={e => e.stopPropagation()}
            >
              <div className="context-menu-overlay">
                <span className="arrow" />
                <Menu
                  className="context-menu"
                  Link={props.Link}
                  items={props.items}
                  toggleSidebar={() => setShow(false)}
                />
              </div>
            </div>
          </ContextMenuStyle>,
          document.getElementById('overlay-container')
        )}
      <div
        style={props.style}
        className={props.className}
        ref={targetRef}
        onClick={e => {
          e.stopPropagation();
          setShow(!show);
        }}
      >
        {props.children}
      </div>
    </>
  );
}

ContextMenu.propTypes = {
  items: menuItemsType,
  eventListener: PropTypes.string,
  placement: placement.isRequired,
  children: PropTypes.node.isRequired,
  Link: PropTypes.object.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};
export default ContextMenu;
