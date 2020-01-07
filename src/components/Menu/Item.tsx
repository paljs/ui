/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ItemStyle } from './style';
import React from 'react';
import { Icon, ItemIcon } from '../Icon';
import { MenuItemType } from '../types';

interface ItemProps {
  item: MenuItemType;
  toggleSidebar?: () => void;
  toggleSubMenu: (item: MenuItemType) => void;
  selectItem: (id: number[]) => void;
  id: number[];
  Link: any;
  nextJs?: boolean;
}

const LinkContent: React.FC<{ item: MenuItemType }> = ({ item }) => {
  return (
    <>
      <ItemIcon icon={item.icon} className="menu-icon" />
      <span className="menu-title">{item.title}</span>
    </>
  );
};

const Item: React.FC<ItemProps> = ({ item, toggleSidebar, toggleSubMenu, selectItem, id, Link, nextJs }) => {
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
    !item.selected && selectItem(id);
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
        <Link {...item.link} className={item.selected ? 'active' : ''} onClick={onClickHandler}>
          {nextJs ? (
            <a>
              <LinkContent item={item} />
            </a>
          ) : (
            <LinkContent item={item} />
          )}
        </Link>
      ) : item.url && !item.children ? (
        <a href={item.url}>
          <LinkContent item={item} />
        </a>
      ) : item.children ? (
        <>
          <a
            href={typeof item.link === 'string' ? item.link : ''}
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
              {item.expanded ? <Icon name="chevron-down-outline" /> : <Icon name="chevron-left-outline" />}
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
