/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ItemStyle } from './style';
import React from 'react';
import { Icon, ItemIcon } from '../Icon';
import { ItemType, LinkProps } from '../types';

interface ItemProps {
  item: ItemType;
  toggleSidebar?: () => void;
  toggleSubMenu: (item: ItemType) => void;
  selectItem: (id: number[]) => void;
  id: number[];
  Link: React.ComponentType<LinkProps>;
}

const Item: React.FC<ItemProps> = ({ item, toggleSidebar, toggleSubMenu, selectItem, id, Link }) => {
  const checkSelected = () => {
    const link = window.location.pathname;
    if (link === item.link || link === item.link + '/' || link + '/' === item.link) {
      selectItem(id);
    }
  };

  React.useEffect(() => {
    checkSelected();
  }, []);

  const onClickHandler = () => {
    !item.selected && checkSelected();
    toggleSidebar && toggleSidebar();
  };

  const handleToggleSubMenu = () => {
    toggleSubMenu(item);
  };

  return (
    <ItemStyle className={item.group ? 'menu-item menu-group' : 'menu-item'}>
      {item.group ? (
        <span>
          <ItemIcon icon={item.icon} className="menu-icon" />
          {item.title}
        </span>
      ) : item.link && !item.children ? (
        <Link
          to={item.link}
          title={item.title}
          target={item.target}
          className={item.selected ? 'active' : ''}
          onClick={onClickHandler}
        >
          <ItemIcon icon={item.icon} className="menu-icon" />
          <span className="menu-title">{item.title}</span>
        </Link>
      ) : item.url && !item.children ? (
        <a href={item.url} target={item.target} title={item.title}>
          <ItemIcon icon={item.icon} className="menu-icon" />
          <span className="menu-title">{item.title}</span>
        </a>
      ) : item.children ? (
        <>
          <a
            href={item.link}
            title={item.title}
            onClick={e => {
              e.preventDefault();
              handleToggleSubMenu();
            }}
            className={item.selected ? 'active' : ''}
          >
            <ItemIcon icon={item.icon} className="menu-icon" />
            <span className="menu-title">{item.title}</span>
            <i className="chevron">
              {item.expanded ? <Icon name="chevron-down-outline" /> : <Icon name="chevron-up-outline" />}
            </i>
          </a>
          <ul className={item.expanded ? 'menu-items expanded' : 'menu-items collapsed'}>
            {item.children.map((item2, index) => {
              return (
                !item.hidden && (
                  <Item
                    key={index}
                    item={item2}
                    id={id.concat([index])}
                    Link={Link}
                    selectItem={selectItem}
                    toggleSidebar={toggleSidebar}
                    toggleSubMenu={toggleSubMenu}
                  />
                )
              );
            })}
          </ul>
        </>
      ) : (
        ''
      )}
    </ItemStyle>
  );
};

export default Item;
