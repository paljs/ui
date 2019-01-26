/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React, { useState, Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { badge } from '../types';
import TabsStyle from './style';
import Badge from '../Badge';

function Tab() {}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  active: PropTypes.bool,
  responsive: PropTypes.bool,
  badge
};

function Tabs(props) {
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState();

  const selectTab = index => {
    const updateTabs = [...tabs];
    for (const i of updateTabs.keys()) {
      if (index === i) {
        setActive(updateTabs[i].children);
      }
      updateTabs[i].active = index === i;
    }
    setTabs(updateTabs);
  };

  useEffect(
    () => {
      const children = Children.map(props.children, child => {
        if (child.props.active) {
          setActive(child.props.children);
        }
        return { ...child.props };
      });
      setTabs(children);
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
          if (tab.active) {
            cssClass.push('active');
          }
          if (tab.responsive) {
            cssClass.push('responsive');
          }
          const tapTitle = (
            <a {...tab.events}>
              {tab.icon && <i className={tab.icon} />}
              {tab.title && <span>{tab.title}</span>}
            </a>
          );
          return (
            <li
              key={index}
              className={cssClass.join(' ')}
              onClick={() => selectTab(index)}
            >
              {props.routeLink ? (
                <Link {...tab.link}>{tapTitle}</Link>
              ) : (
                tapTitle
              )}
              {tab.badge && (
                <Badge status={tab.badge.status} position={tab.badge.position}>
                  {tab.badge.title}
                </Badge>
              )}
            </li>
          );
        })}
      </ul>
      <div className="tab-content">{active}</div>
    </TabsStyle>
  );
}

Tabs.propType = {
  classNames: PropTypes.string,
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
  routeLink: PropTypes.bool
};

export { Tabs, Tab };
