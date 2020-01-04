import { sizeString, statusString } from '../shared';

export const progressProps = [
  {
    name: 'status',
    type: 'string',
    description: 'adds specific styles first letter capital: ' + statusString,
  },
  {
    name: 'size',
    type: 'string',
    description: `Size of the component available sizes: ${sizeString} default: MD`,
  },
  {
    name: 'value',
    type: 'number',
    description: 'Progress bar value in percent (0 - 100)',
  },
  {
    name: 'displayValue',
    type: 'number',
    description: 'Displays value inside progress bar',
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
