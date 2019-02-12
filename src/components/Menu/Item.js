/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ItemStyle } from './style';
import React, { Fragment, useEffect } from 'react';
import { ArrowLeft, ArrowDown } from '../../svg';

const Item = ({ item, toggleSubMenu, selectItem, id, Link }) => {
  useEffect(() => {
    if (item.link && window.location.pathname === item.link.to) {
      handleSelect();
    }
  }, []);

  const handleSelect = () => {
    selectItem(id);
  };

  const isActive = ({ isCurrent }) => {
    return isCurrent && !item.selected ? selectItem(id, false) : null;
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
          {...item.link}
          getProps={isActive}
          title={item.title}
          target={item.target}
          className={item.selected ? 'active' : ''}
        >
          <i className={'menu-icon ' + item.icon} />
          <span className="menu-title">{item.title}</span>
        </Link>
      ) : item.url && !item.children ? (
        <a href={item.url} target={item.target} title={item.title}>
          <i className={'menu-icon ' + item.icon} />
          <span className="menu-title">{item.title}</span>
        </a>
      ) : item.children ? (
        <Fragment>
          <Link
            {...item.link}
            title={item.title}
            onClick={e => {
              e.preventDefault();
              handleToggleSubMenu();
            }}
            className={item.selected ? 'active' : ''}
          >
            <i className={'menu-icon ' + item.icon} />
            <span className="menu-title">{item.title}</span>
            <i className="chevron">
              {item.expanded ? <ArrowDown /> : <ArrowLeft />}
            </i>
          </Link>
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
                    selectItem={selectItem}
                    Link={Link}
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
