/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import ContextMenuStyle from './style';
import { Placement, ItemType, LinkProps } from '../types';
import usePopoverPosition from '../popoverPosition';
import Menu from '../Menu';

const ContextMenu: React.FC<ContextMenuProps> = props => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { position, placement, show, setShow } = usePopoverPosition(props, targetRef, overlayRef);

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
          document.getElementById('overlay-container')!,
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
};

interface ContextMenuProps {
  items: ItemType;
  eventListener?: string;
  placement: Placement;
  children: React.ReactNode;
  Link: React.ComponentType<LinkProps>;
  style?: React.CSSProperties;
  className?: string;
}

export default ContextMenu;
