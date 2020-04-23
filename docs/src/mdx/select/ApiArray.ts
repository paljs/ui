import { statusString, sizeString, shapeString } from '../shared';

export const selectProps = [
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
];
