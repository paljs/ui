/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { MenuStyle } from './style';
import Item from './Item';

const Menu = forwardRef((props, ref) => {
  const [items, setItems] = useState(props.items);

  useImperativeHandle(
    ref,
    () => ({
      collapseAll() {
        setItems(toggleSubMenu([...items], false));
      },
      expandAll() {
        setItems(toggleSubMenu([...items], true));
      }
    }),
    [items]
  );

  const onSelectItem = index => {
    typeof props.toggleSidebar === 'function' && props.toggleSidebar();
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
    <MenuStyle className="menu">
      <ul className="menu-items">
        {items.map((item, index) => {
          return (
            !item.hidden && (
              <Item
                key={index}
                id={index}
                item={item}
                selectItem={i => onSelectItem(i)}
                toggleSubMenu={item => onToggleSubMenu(item)}
              />
            )
          );
        })}
      </ul>
    </MenuStyle>
  );
});

const itemType = {
  title: PropTypes.string.isRequired,
  link: PropTypes.any,
  expanded: PropTypes.bool,
  group: PropTypes.bool,
  hidden: PropTypes.bool,
  icon: PropTypes.string,
  target: PropTypes.string,
  url: PropTypes.string
};
function recursive(...args) {
  return PropTypes.arrayOf(
    PropTypes.shape({
      ...itemType,
      children: recursive
    })
  )(...args);
}

Menu.propTypes = {
  items: recursive,
  toggleSidebar: PropTypes.func
};
export default Menu;
