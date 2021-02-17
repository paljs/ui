/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { IconProps } from '../Icon';

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

export type IconField = string | IconProps;

interface ItemType {
  title: string;
  expanded?: boolean;
  selected?: boolean;
  hidden?: boolean;
  icon?: IconField;
  hasDynamicPath?: boolean;
  url: string;
  link: { [k: string]: any };
  group: boolean;
  extras?: { position: 'after' | 'before'; content: any }[];
  children: RequireOnlyOne<ItemType, 'url' | 'children' | 'link' | 'group'>[];
}

export type MenuItemType = RequireOnlyOne<ItemType, 'url' | 'children' | 'link' | 'group'>;
export interface ButtonTypes {
  fullWidth?: boolean;
  pulse?: boolean;
  appearance?: Appearance;
  size?: Size;
  shape?: Shape;
  status?: Status;
}

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];
