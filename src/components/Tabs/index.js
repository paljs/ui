/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React, { useState, Children, useEffect } from 'react';
import PropTypes from 'prop-types';

import { badge } from '../types';
import TabsStyle from './style';
import Badge from '../Badge';

function Tab(props) {
  return <div className="tab-content">{props.children}</div>;
}

Tab.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  responsive: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  badge
};

function Tabs(props) {
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState(props.activeIndex);

  const selectTab = index => {
    typeof props.onSelect === 'function' && props.onSelect(index);
    setActive(index);
  };

  useEffect(
    () => {
      const children = Children.map(props.children, child => {
        return { ...child.props };
      });
      setTabs(children);
      if (!props.activeIndex) {
        setActive(0);
      }
    },
    [props.children]
  );
  return (
    <TabsStyle
      className={props.className}
      style={props.style}
      fullWidth={props.fullWidth}
    >
      <ul className="tabs">
        {tabs.map((tab, index) => {
          const cssClass = ['tab'];
          if (index === active) {
            cssClass.push('active');
          }
          if (tab.responsive) {
            cssClass.push('responsive');
          }
          if (tab.disabled) {
            cssClass.push('disabled');
          }
          if (tab.className) {
            cssClass.push(...tab.className.split(' '));
          }
          return (
            <li
              key={index}
              className={cssClass.join(' ')}
              onClick={() => !tab.disabled && selectTab(index)}
            >
              <a>
                {tab.icon && <i className={tab.icon} />}
                {tab.title && <span>{tab.title}</span>}
              </a>
              {tab.badge && (
                <Badge status={tab.badge.status} position={tab.badge.position}>
                  {tab.badge.title}
                </Badge>
              )}
            </li>
          );
        })}
      </ul>
      {Children.map(props.children, (child, i) => {
        if (i === active) {
          return child;
        }
      })}
    </TabsStyle>
  );
}

Tabs.propType = {
  classNames: PropTypes.string,
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
  onSelect: PropTypes.func,
  activeIndex: PropTypes.number
};

export { Tabs, Tab };
