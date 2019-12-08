/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { badge, customCss } from '../types';
import { ActionsStyle, ActionStyle } from './style';
import Badge from '../Badge';

function Actions({
  actions,
  className,
  style,
  fullWidth,
  size,
  inverse,
  Link
}) {
  return (
    <ActionsStyle className={className} style={style}>
      {actions.map((action, index) => {
        return (
          <ActionStyle
            key={index}
            fullWidth={fullWidth}
            size={size}
            inverse={inverse}
            disabled={action.disabled}
          >
            {action.icon ? (
              action.link ? (
                <Link
                  to={action.link}
                  target={action.target}
                  className="icon-container"
                  {...action.events}
                >
                  <i className={'control-icon ' + action.icon} />
                </Link>
              ) : (
                <a
                  href={action.url}
                  target={action.target}
                  className="icon-container"
                  {...action.events}
                >
                  <i className={'control-icon ' + action.icon} />
                </a>
              )
            ) : (
              action.content
            )}
            {action.badge && (
              <Badge
                status={action.badge.status}
                position={action.badge.position}
              >
                {action.badge.title}
              </Badge>
            )}
          </ActionStyle>
        );
      })}
    </ActionsStyle>
  );
}

Actions.propTypes = {
  ...customCss,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['SM', 'MD', 'LG']),
  inverse: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      events: PropTypes.object,
      link: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
      content: PropTypes.any,
      disabled: PropTypes.bool,
      badge
    })
  ).isRequired
};

export default Actions;
