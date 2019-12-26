import React from 'react';
import { defaultIcons } from './defaultIcons';
import { Status } from '../types';
import IconStyle from './style';

interface IconProps {
  name: keyof typeof defaultIcons;
  status?: Status;
  className?: string;
}

export const Icon: React.FC<IconProps> = props => {
  return (
    <IconStyle
      dangerouslySetInnerHTML={{ __html: defaultIcons[props.name] }}
      status={props.status}
      className={props.className}
    />
  );
};
