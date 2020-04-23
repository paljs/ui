import { sizeString, statusString, shapeString } from '../shared';

export const inputProps = [
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'If set element will fill container',
  },
  {
    name: 'status',
    type: 'string',
    description: 'Field status (adds specific styles): ' + statusString,
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
