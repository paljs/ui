import { sizeString, statusString } from '../shared';

export const spinnerProps = [
  {
    name: 'size',
    type: 'string',
    description: 'Size of the component, ' + sizeString,
  },
  {
    name: 'status',
    type: 'string',
    description: 'Field status (adds specific styles): ' + statusString,
  },
];
