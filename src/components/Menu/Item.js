/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ItemStyle } from './style';
import React, { Fragment, useEffect } from 'react';
import { ArrowLeft, ArrowDown } from '../../svg';

const Item = ({ item, toggleSidebar, toggleSubMenu, selectItem, id, Link }) => {
  useEffect(() => {
    const link = window.location.pathname;
    if (
      link === item.link ||
      link === item.link + '/' ||
      link + '/' === item.link
    ) {
      selectItem(id);
    }
  }, []);

  const isActive = ({ isCurrent }) => {
    isCurrent && !item.selected && selectItem(id);
  };

  const handleToggleSubMenu = () => {
    toggleSubMenu(item);
  };

  return (
    <ItemStyle className={item.group ? 'menu-item menu-group' : 'menu-item'}>
      {item.group ? (
        <span>
          {item.icon && <i className={'menu-icon ' + item.icon} />}
          {item.title}
        </span>
      ) : item.link && !item.children ? (
        <Link
          to={item.link}
          getProps={isActive}
          title={item.title}
          target={item.target}
          className={item.selected ? 'active' : ''}
          onClick={toggleSidebar}
        >
          {item.icon && <i className={'menu-icon ' + item.icon} />}
          <span className="menu-title">{item.title}</span>
        </Link>
      ) : item.url && !item.children ? (
        <a href={item.url} target={item.target} title={item.title}>
          {item.icon && <i className={'menu-icon ' + item.icon} />}
          <span className="menu-title">{item.title}</span>
        </a>
      ) : item.children ? (
        <Fragment>
          <a
            href={item.link}
            title={item.title}
            onClick={e => {
              e.preventDefault();
              handleToggleSubMenu();
            }}
            className={item.selected ? 'active' : ''}
          >
            {item.icon && <i className={'menu-icon ' + item.icon} />}
            <span className="menu-title">{item.title}</span>
            <i className="chevron">
              {item.expanded ? <ArrowDown /> : <ArrowLeft />}
            </i>
          </a>
          <ul
            className={
              item.expanded ? 'menu-items expanded' : 'menu-items collapsed'
            }
          >
            {item.children.map((item2, index) => {
              return (
                !item.hidden && (
                  <Item
                    key={index}
                    item={item2}
                    id={id + ',' + index}
                    Link={Link}
                    selectItem={selectItem}
                    toggleSidebar={toggleSidebar}
                    toggleSubMenu={toggleSubMenu}
                  />
                )
              );
            })}
          </ul>
        </Fragment>
      ) : (
        ''
      )}
    </ItemStyle>
  );
};

export default Item;
