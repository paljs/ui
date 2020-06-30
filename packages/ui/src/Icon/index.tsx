/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { defaultIcons } from './defaultIcons';
import { Status, IconField } from '../types';
import IconStyle from './style';
import { EvaIconOptions, Icons } from '@paljs/icons';
import { LayoutContext } from '../Layout';

export interface IconProps {
  name: keyof Icons;
  status?: Status;
  className?: string;
  options?: EvaIconOptions;
}

export const Icon: React.FC<Omit<IconProps, 'name'> & { name: keyof typeof defaultIcons }> = (props) => {
  return (
    <IconStyle
      dangerouslySetInnerHTML={{ __html: defaultIcons[props.name] }}
      status={props.status}
      className={props.className}
    />
  );
};

export const EvaIcon: React.FC<IconProps> = (props) => {
  const { evaIcons } = React.useContext(LayoutContext);
  let svgIcon = '';
  if (evaIcons && evaIcons[props.name]) {
    svgIcon = evaIcons[props.name](props.options);
  }
  return <IconStyle dangerouslySetInnerHTML={{ __html: svgIcon }} status={props.status} className={props.className} />;
};

interface ItemIconProps {
  icon?: IconField;
  className?: string;
}

export const ItemIcon: React.FC<ItemIconProps> = ({ icon, className }) => {
  const { evaIcons } = React.useContext(LayoutContext);
  if (typeof icon === 'string') {
    if (icon in defaultIcons) {
      return <Icon name={icon as keyof typeof defaultIcons} className={className} />;
    } else if (evaIcons && icon in evaIcons) {
      return <EvaIcon name={icon as keyof Icons} className={className} />;
    } else {
      return <i className={className + ' ' + icon} />;
    }
  } else if (typeof icon === 'object' && evaIcons && evaIcons[icon.name]) {
    icon.className += ' ' + className;
    return <EvaIcon {...icon} />;
  } else {
    return <></>;
  }
};
