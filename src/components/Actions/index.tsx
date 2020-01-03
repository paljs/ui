/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Badge as BadgeType, Size, LinkProps, IconField } from '../types';
import { ActionsStyle, ActionStyle } from './style';
import Badge from '../Badge';
import { ItemIcon } from '../Icon';

export const Actions: React.FC<ActionsProps> = ({ actions, className, style, fullWidth, size, inverse, Link }) => {
  return (
    <ActionsStyle className={className} style={style}>
      {actions.map((action: ActionType, index: number) => {
        return (
          <ActionStyle key={index} fullWidth={fullWidth} size={size} inverse={inverse} disabled={!!action.disabled}>
            {action.icon ? (
              action.link ? (
                <Link to={action.link} target={action.target} className="icon-container" {...action.events}>
                  <ItemIcon icon={action.icon} className="control-icon" />
                </Link>
              ) : (
                <a href={action.url} target={action.target} className="icon-container" {...action.events}>
                  <ItemIcon icon={action.icon} className="control-icon" />
                </a>
              )
            ) : (
              action.content
            )}
            {action.badge && (
              <Badge status={action.badge.status} position={action.badge.position}>
                {action.badge.title}
              </Badge>
            )}
          </ActionStyle>
        );
      })}
    </ActionsStyle>
  );
};

Actions.defaultProps = {
  size: 'Small',
};

export interface ActionType {
  icon?: IconField;
  events?: object;
  link?: any;
  url?: string;
  target?: string;
  content?: any;
  disabled?: boolean;
  badge?: BadgeType;
}

interface ActionsProps {
  actions: ActionType[];
  size: Size;
  inverse?: boolean;
  fullWidth?: boolean;
  Link?: React.ComponentType<LinkProps>;
  className?: string;
  style?: React.CSSProperties;
}
