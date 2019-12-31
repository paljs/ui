/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { IconProps } from './Icon';

export interface Badge {
  status: Status;
  title: string;
  position: Position;
}

export type Position =
  | 'topRight'
  | 'topLeft'
  | 'bottomRight'
  | 'bottomLeft'
  | 'topStart'
  | 'topEnd'
  | 'bottomStart'
  | 'bottomEnd';

export type Placement = 'start' | 'end' | 'right' | 'left' | 'top' | 'bottom';

export type Trigger = 'click' | 'hover' | 'focus' | 'hint';

export type Status = 'Info' | 'Success' | 'Danger' | 'Primary' | 'Warning' | 'Basic' | 'Control';

export type Size = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Giant';

export type Shape = 'Rectangle' | 'SemiRound' | 'Round';

export type Appearance = 'filled' | 'outline' | 'ghost' | 'hero';

export interface ItemType {
  title: string;
  link?: any;
  expanded?: boolean;
  selected?: boolean;
  group?: boolean;
  hidden?: boolean;
  icon?: string | IconProps;
  target?: string;
  url?: string;
  children?: ItemType[];
}

export interface ButtonTypes {
  fullWidth?: boolean;
  pulse?: boolean;
  appearance?: Appearance;
  size: Size;
  shape?: Shape;
  status: Status;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: any;
  component?: React.ComponentType<any>;
  replace?: boolean;
  innerRef?: React.Ref<HTMLAnchorElement>;
}

export type Record<K extends keyof any, T> = {
  [P in K]?: T;
};
