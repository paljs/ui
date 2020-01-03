import { sizeString, statusString } from '../shared';

export const cardProps = [
  {
    name: 'accent',
    type: 'string',
    description: 'Card accent (color of the top border first letter capital): ' + statusString,
  },
  {
    name: 'status',
    type: 'string',
    description: 'Card status (adds specific styles first letter capital): ' + statusString,
  },
  {
    name: 'size',
    type: 'string',
    description: 'Card size, available sizes: ' + sizeString,
  },
];
