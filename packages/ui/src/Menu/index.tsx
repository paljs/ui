/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { MenuStyle } from './style';
import Item from './Item';
import { MenuItemType } from '../types';

interface MenuProps {
  items: MenuItemType[];
  toggleSidebar?: () => void;
  Link: any;
  nextJs?: boolean;
  currentPath: string;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<MenuRefObject>;
}

export interface MenuRefObject {
  toggle: () => void;
}

const Menu = React.forwardRef<MenuRefObject, MenuProps>((props, ref) => {
  const [items, setItems] = React.useState<MenuItemType[]>(props.items);
  const [expended, setExpended] = React.useState(false);

  const toggleSubMenu = (updateItems: MenuItemType[], action: boolean | MenuItemType) => {
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

  React.useEffect(() => {
    if (props.items) {
      setItems(props.items);
    }
  }, [props.items]);

  const updateSelected = (updateItems: MenuItemType[], ia: number[]) => {
    for (const item of updateItems) {
      const state = updateItems.indexOf(item) === ia[0];
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

  const onSelectItem = (index: number[]) => {
    setItems(updateSelected([...items], index));
  };

  const onToggleSubMenu = (item: MenuItemType) => {
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
                id={[index]}
                item={item}
                Link={props.Link}
                nextJs={props.nextJs}
                currentPath={props.currentPath}
                selectItem={(i) => onSelectItem(i)}
                toggleSidebar={props.toggleSidebar}
                toggleSubMenu={(item: MenuItemType) => onToggleSubMenu(item)}
              />
            )
          );
        })}
      </ul>
    </MenuStyle>
  );
});

Menu.displayName = 'Menu';

export { Menu };
