/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { MenuStyle } from './style';
import Item from './Item';
import { menuItemsType } from '../types';

function Menu(props, ref) {
  const [items, setItems] = React.useState(props.items);
  const [expended, setExpended] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    toggle() {
      toggleMenu();
    }
  }));

  const toggleMenu = () => {
    setItems(toggleSubMenu([...items], !expended));
    setExpended(!expended);
  };

  const onSelectItem = index => {
    const indexArray = Number.isInteger(index) ? [index] : index.split(',');
    setItems(updateSelected([...items], indexArray));
  };

  const updateSelected = (updateItems, ia) => {
    for (const i of updateItems.keys()) {
      const state = i === Number(ia[0]);
      updateItems[i].selected = state;
      if (state) {
        updateItems[i].expanded = true;
      }
      if (updateItems[i].children) {
        if (state) {
          updateSelected(updateItems[i].children, ia.splice(1));
        } else {
          updateSelected(updateItems[i].children, []);
        }
      }
    }
    return updateItems;
  };

  const onToggleSubMenu = item => {
    setItems(toggleSubMenu([...items], item));
  };

  const toggleSubMenu = (updateItems, action) => {
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
                selectItem={i => onSelectItem(i)}
                toggleSidebar={props.toggleSidebar}
                toggleSubMenu={item => onToggleSubMenu(item)}
              />
            )
          );
        })}
      </ul>
    </MenuStyle>
  );
}

Menu.propTypes = {
  items: menuItemsType,
  toggleSidebar: PropTypes.func,
  Link: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};
export default React.forwardRef(Menu);
