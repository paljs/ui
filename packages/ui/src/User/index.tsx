/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import Badge from '../Badge';
import UserStyle from './style';
import { Size, Badge as BadgeType, Shape } from '../types';

const User: React.FC<UserProps> = (props) => {
  const getInitials = () => {
    if (props.name) {
      const names = props.name.split(' ');
      return names
        .map((n) => n.charAt(0))
        .splice(0, 2)
        .join('')
        .toUpperCase();
    }
    return '';
  };
  return (
    <UserStyle {...props}>
      <div className="user-container">
        <div className={'user-picture ' + (props.image ? 'image' : 'initials')}>
          {!props.image && props.showInitials && getInitials()}
          {props.badge && (
            <Badge status={props.badge.status} position={props.badge.position}>
              {props.badge.title}
            </Badge>
          )}
        </div>
        {!props.onlyPicture && (
          <div className="info-container">
            <div className="user-name">{props.name}</div>
            <div className="user-title">{props.title}</div>
          </div>
        )}
      </div>
    </UserStyle>
  );
};
User.defaultProps = {
  size: 'Medium',
  showInitials: true,
};

export interface UserProps {
  size?: Size;
  shape?: Shape;
  name?: string;
  title?: string;
  color?: string;
  image?: string;
  showInitials?: boolean;
  onlyPicture?: boolean;
  inverse?: boolean;
  badge?: BadgeType;
}

export default User;
