import { sizeString, statusString } from '../shared';

export const alertProps = [
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
  {
    name: 'accent',
    type: 'string',
    description: 'Alert accent (color of the top border): ' + statusString,
  },
  {
    name: 'outline',
    type: 'string',
    description: 'Alert outline (color of the border): ' + statusString,
  },
  {
    name: 'closable',
    type: 'boolean',
    description: 'Shows close icon',
  },
  {
    name: 'onClose()',
    type: 'function',
    description: 'Callback when close button clicked',
  },
];
