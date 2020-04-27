/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import ContextMenuStyle from './style';
import { Placement, MenuItemType } from '../types';
import { Menu } from '../Menu';
import Overlay, { OverLayContext } from '../PopoverLay';

const Component: React.FC<ContextMenuProps> = (props) => {
  const { hide } = React.useContext(OverLayContext);
  return (
    <ContextMenuStyle>
      <span className="arrow" />
      <Menu
        className="context-menu"
        nextJs={props.nextJs}
        currentPath={props.currentPath}
        Link={props.Link}
        items={props.items}
        toggleSidebar={hide}
      />
    </ContextMenuStyle>
  );
};
const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  return (
    <Overlay
      target={props.children}
      placement={props.placement}
      style={props.style}
      className={props.className}
      eventListener={props.eventListener}
      transformSize={15}
      contextMenu
    >
      <Component {...props} />
    </Overlay>
  );
};

interface ContextMenuProps {
  items: MenuItemType[];
  eventListener?: string;
  placement: Placement;
  children: React.ReactNode;
  Link: any;
  nextJs?: boolean;
  currentPath: string;
  style?: React.CSSProperties;
  className?: string;
}

export default ContextMenu;
