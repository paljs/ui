import { positionString, statusString } from '../shared';

export const badgeProps = [
  {
    name: 'position',
    type: 'string',
    description: 'Can be set to one of predefined positions: ' + positionString,
  },
  {
    name: 'status',
    type: 'string',
    description: '(adds specific styles): ' + statusString,
  },
  {
    name: 'children',
    type: 'string',
    description: 'component content',
  },
];
