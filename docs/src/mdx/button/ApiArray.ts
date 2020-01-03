import { appearanceString, shapeString, sizeString, statusString } from '../shared';

export const buttonProps = [
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'If set element will fill its container',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the button',
  },
  {
    name: 'appearance',
    type: 'Appearance',
    description: `Button appearance: ${appearanceString}`,
  },
  {
    name: 'size',
    type: 'string',
    description: `Field size, available sizes: ${sizeString} default: Medium`,
  },
  {
    name: 'shape',
    type: 'string',
    description: `Field shapes: ${shapeString} default: Rectangle`,
  },
  {
    name: 'status',
    type: 'string',
    description: `Field status (adds specific styles): ${statusString}`,
  },
  {
    name: 'pulse',
    type: 'boolean',
    description: 'make button Pulsing',
  },
  {
    name: 'className',
    type: 'string',
    description: 'You can pass any css class to modify style',
  },
  {
    name: 'style',
    type: 'object',
    description: 'You can pass any css object to modify style',
  },
];
