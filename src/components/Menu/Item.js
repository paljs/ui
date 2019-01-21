/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import Link from 'next/link';
import Router from 'next/router';
import { ItemStyle } from './style';
import React, { useEffect, Fragment } from 'react';
import { ArrowLeft, ArrowDown } from '../../svg';

const Item = ({ item, selectItem, toggleSubMenu, id }) => {
  useEffect(() => {
    if (item.link) {
      if (
        typeof item.link.href === 'string' &&
        item.link.href === Router.pathname
      ) {
        handleSelect();
      } else if (
        typeof item.link.href === 'object' &&
        item.link.href.pathname === Router.pathname
      ) {
        handleSelect();
      }
    }
  }, []);

  const handleSelect = () => {
    selectItem(id);
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
        <Link {...item.link}>
          <a
            title={item.title}
            className={item.selected ? 'active' : ''}
            target={item.target}
            onClick={handleSelect}
          >
            <i className={'menu-icon ' + item.icon} />
            <span className="menu-title">{item.title}</span>
          </a>
        </Link>
      ) : item.url && !item.children ? (
        <a
          href={item.url}
          target={item.target}
          title={item.title}
          onClick={handleSelect}
          className={item.selected ? 'active' : ''}
        >
          <i className={'menu-icon ' + item.icon} />
          <span className="menu-title">{item.title}</span>
        </a>
      ) : item.children ? (
        <Fragment>
          <a
            href="#"
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
                    selectItem={selectItem}
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
