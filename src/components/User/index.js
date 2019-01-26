/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';
import Badge from '../Badge';
import UserStyle from './style';
import React from 'react';

function User(props) {
  const getInitials = () => {
    if (props.name) {
      const names = props.name.split(' ');

      return names
        .map(n => n.charAt(0))
        .splice(0, 2)
        .join('')
        .toUpperCase();
    }

    return '';
  };
  return (
    <UserStyle {...props}>
      <div className="user-container">
        <div
          className={'user-picture ' + (props.image ? 'image' : 'background')}
        >
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
}
User.defaultProps = {
  size: 'MD',
  showInitials: true
};

User.propTypes = {
  size: PropTypes.oneOf(['SM', 'MD', 'LG', 'XL']),
  name: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  showInitials: PropTypes.bool,
  onlyPicture: PropTypes.bool,
  inverse: PropTypes.bool,
  badge: PropTypes.object
};

export default User;
