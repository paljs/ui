import React from 'react';
import { defaultIcons } from './defaultIcons';
import { Status } from '../types';
import IconStyle from './style';
import { EvaIconOptions, Icons } from '../../../eva-icon/src/types';
import { LayoutContext } from '../Layout';

export interface IconProps {
  name: keyof Icons & keyof typeof defaultIcons;
  status?: Status;
  className?: string;
  options?: EvaIconOptions;
}

export const Icon: React.FC<IconProps> = props => {
  const { evaIcons } = React.useContext(LayoutContext);
  let svgIcon = '';
  if (evaIcons && evaIcons[props.name]) {
    svgIcon = evaIcons[props.name](props.options);
  } else if (defaultIcons[props.name]) {
    svgIcon = defaultIcons[props.name];
  }
  return <IconStyle dangerouslySetInnerHTML={{ __html: svgIcon }} status={props.status} className={props.className} />;
};
