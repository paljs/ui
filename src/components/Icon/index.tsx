import React from 'react';
import { defaultIcons } from './defaultIcons';
import { Status } from '../types';
import IconStyle from './style';
import { EvaIconOptions, Icons } from '../EvaTypes';
import { LayoutContext } from '../Layout';

export interface IconProps {
  name: keyof Icons;
  status?: Status;
  className?: string;
  options?: EvaIconOptions;
}

export const Icon: React.FC<IconProps & { name: keyof typeof defaultIcons }> = props => {
  return (
    <IconStyle
      dangerouslySetInnerHTML={{ __html: defaultIcons[props.name] }}
      status={props.status}
      className={props.className}
    />
  );
};

export const EvaIcon: React.FC<IconProps> = props => {
  const { evaIcons } = React.useContext(LayoutContext);
  let svgIcon = '';
  if (evaIcons && evaIcons[props.name]) {
    svgIcon = evaIcons[props.name](props.options);
  }
  return <IconStyle dangerouslySetInnerHTML={{ __html: svgIcon }} status={props.status} className={props.className} />;
};
