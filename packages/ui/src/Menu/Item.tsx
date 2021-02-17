/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Icon, ItemIcon } from '../Icon';
import { MenuItemType } from '../types';
import { ItemStyle } from './style';

interface ItemProps {
  item: MenuItemType;
  toggleSidebar?: () => void;
  toggleSubMenu: (item: MenuItemType) => void;
  selectItem: (id: number[]) => void;
  id: number[];
  Link: any;
  nextJs?: boolean;
  currentPath: string;
}

const getExtras = (item: MenuItemType) => {
  return {
    customAfter: item.extras?.filter((x) => x.position === 'after').map((x) => x.content),
    customBefore: item.extras?.filter((x) => x.position === 'before').map((x) => x.content),
  };
};

const LinkContent: React.FC<{ item: MenuItemType }> = ({ item }) => {
  const { customAfter, customBefore } = getExtras(item);
  return (
    <>
      <ItemIcon icon={item.icon} className="menu-icon" />
      {customBefore}
      <span className="menu-title">{item.title}</span>
      {customAfter}
    </>
  );
};

const Item: React.FC<ItemProps> = ({
  item,
  toggleSidebar,
  toggleSubMenu,
  selectItem,
  id,
  Link,
  nextJs,
  currentPath,
}) => {
  React.useEffect(() => {
    const link = nextJs ? item.link?.href : item.link?.to;
    if (link && (currentPath === link || (item.hasDynamicPath && currentPath?.startsWith(link))) && !item.selected)
      selectItem(id);
  }, [currentPath]);

  const onClickHandler = () => {
    !item.selected && selectItem(id);
    toggleSidebar && toggleSidebar();
  };

  const handleToggleSubMenu = () => {
    toggleSubMenu(item);
  };

  const { customAfter, customBefore } = getExtras(item);

  return (
    <ItemStyle className={item.group ? 'menu-item menu-group' : 'menu-item'}>
      {item.group ? (
        <span>
          <ItemIcon icon={item.icon} className="menu-icon" />
          {customBefore}
          {item.title}
          {customAfter}
        </span>
      ) : item.link && !item.children ? (
        nextJs ? (
          <Link {...item.link}>
            <a onClick={onClickHandler} className={item.selected ? 'active' : ''}>
              <LinkContent item={item} />
            </a>
          </Link>
        ) : (
          <Link {...item.link} className={item.selected ? 'active' : ''} onClick={onClickHandler}>
            <LinkContent item={item} />
          </Link>
        )
      ) : item.url && !item.children ? (
        <a href={item.url}>
          <LinkContent item={item} />
        </a>
      ) : item.children ? (
        <>
          <a
            href="#"
            title={item.title}
            onClick={(e) => {
              e.preventDefault();
              handleToggleSubMenu();
            }}
            className={item.selected ? 'active' : ''}
          >
            <ItemIcon icon={item.icon} className="menu-icon" />
            {customBefore}
            <span className="menu-title">{item.title}</span>
            {customAfter}
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
                    nextJs={nextJs}
                    currentPath={currentPath}
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
