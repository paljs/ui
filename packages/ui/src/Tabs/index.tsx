/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import { Badge as BadgeType, IconField } from '../types';
import TabsStyle from './style';
import Badge from '../Badge';
import { ItemIcon } from '../Icon';

const Tab: React.FC<TabProps> = (props) => {
  return <div className="tab-content">{props.children}</div>;
};

export interface TabProps {
  title?: string;
  icon?: IconField;
  responsive?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  badge?: BadgeType;
  children?: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const [tabs, setTabs] = React.useState<TabProps[]>([]);
  const [active, setActive] = React.useState<number>(props.activeIndex ?? 0);

  const selectTab = (index: number) => {
    typeof props.onSelect === 'function' && props.onSelect(index);
    setActive(index);
  };
  
  React.useEffect(() => {
    if (props.activeIndex) {
      setActive(props.activeIndex)
    }
  }, [props.activeIndex])
  
  React.useEffect(() => {
    const children: TabProps[] = [];
    React.Children.forEach(props.children, (child) => {
      if (child.props.icon || child.props.title) {
        children.push({ ...child.props });
      }
    });
    setTabs(children);
  }, [props.children]);

  return (
    <TabsStyle className={props.className} style={props.style} fullWidth={props.fullWidth}>
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
              style={tab.style}
              key={index}
              className={cssClass.join(' ')}
              onClick={() => !tab.disabled && selectTab(index)}
            >
              <a>
                {tab.icon && <ItemIcon icon={tab.icon} className="tabs-icon" />}
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
      {React.Children.map(props.children, (child, i) => {
        if (i === active && child.props.children) {
          return child;
        }
      })}
    </TabsStyle>
  );
};

interface TabsProps {
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  onSelect?: (index: number) => void;
  activeIndex?: number;
  children: React.ReactElement<TabProps>[];
}

export { Tabs, Tab };
