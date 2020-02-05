import { Status, Placement, Trigger, Shape, Appearance, Size, Position } from 'oah-ui';

export const status: Status[] = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Control', 'Basic'];

export const placement: Placement[] = ['start', 'end', 'right', 'left', 'top', 'bottom'];

export const trigger: Trigger[] = ['click', 'hover', 'focus', 'hint'];

export const size: Size[] = ['Tiny', 'Small', 'Medium', 'Large', 'Giant'];

export const shape: Shape[] = ['Rectangle', 'SemiRound', 'Round'];

export const appearance: Appearance[] = ['filled', 'outline', 'ghost', 'hero'];

export const position: Position[] = [
  'topRight',
  'topLeft',
  'bottomRight',
  'bottomLeft',
  'topStart',
  'topEnd',
  'bottomStart',
  'bottomEnd',
];

export const positionString = position.join(' | ');

export const placementString = placement.join(' | ');

export const triggerString = trigger.join(' | ');

export const statusString = status.join(' | ');

export const sizeString = size.join(' | ');

export const shapeString = shape.join(' | ');

export const appearanceString = appearance.join(' | ');

export type Option = { value: any, label: any };