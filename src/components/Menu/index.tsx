/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { MenuStyle } from './style';
import Item from './Item';
import { ItemType } from '../types';

interface MenuProps {
  items: ItemType[];
  toggleSidebar?: (event: React.MouseEvent<HTMLLinkElement, MouseEvent>) => void;
  Link: React.ComponentType;
  className?: string;
  style?: React.CSSProperties;
}

interface MenuRefObject {
  toggle: () => void;
}

let Menu: React.RefForwardingComponent<MenuRefObject, MenuProps> = (props, ref) => {
  const [items, setItems] = React.useState<ItemType[]>(props.items);
  const [expended, setExpended] = React.useState(false);

  const toggleSubMenu = (updateItems: ItemType[], action: boolean | ItemType) => {
    for (const item of updateItems) {
      if (typeof action === 'boolean') {
        item.expanded = action;
      } else if (item === action) {
        item.expanded = !item.expanded;
        break;
      }
      if (item.children) {
        toggleSubMenu(item.children, action);
      }
    }
    return updateItems;
  };

  const toggleMenu = () => {
    setItems(toggleSubMenu([...items], !expended));
    setExpended(!expended);
  };

  React.useImperativeHandle(ref, () => ({
    toggle() {
      toggleMenu();
    },
  }));

  const updateSelected = (updateItems: ItemType[], ia: string[] | number[]) => {
    for (const item of updateItems) {
      const state = updateItems.indexOf(item) === Number(ia[0]);
      item.selected = state;
      if (state) {
        item.expanded = true;
      }
      if (item.children) {
        if (state) {
          updateSelected(item.children, ia.splice(1));
        } else {
          updateSelected(item.children, []);
        }
      }
    }
    return updateItems;
  };

  const onSelectItem = (index: string | number) => {
    const indexArray = typeof index === 'number' ? [index] : index.split(',');
    setItems(updateSelected([...items], indexArray));
  };

  const onToggleSubMenu = (item: ItemType) => {
    setItems(toggleSubMenu([...items], item));
  };

  return (
    <MenuStyle className={props.className} style={props.style}>
      <ul className="menu-items">
        {items.map((item, index) => {
          return (
            !item.hidden && (
              <Item
                key={index}
                id={index}
                item={item}
                Link={props.Link}
                selectItem={(i: number) => onSelectItem(i)}
                toggleSidebar={props.toggleSidebar}
                toggleSubMenu={(item: ItemType) => onToggleSubMenu(item)}
              />
            )
          );
        })}
      </ul>
    </MenuStyle>
  );
};
Menu = React.forwardRef(Menu);

export default Menu;
