import { statusString } from '../shared';

export const checkboxProps = [
  {
    name: 'checked',
    type: 'boolean',
    description: 'You want to control Component just pass `checked` props and control with his value',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'disabled input',
  },
  {
    name: 'status',
    type: 'string',
    description: 'Checkbox status ' + statusString,
  },
  {
    name: 'onChange()',
    type: 'function',
    description: 'Callback with boolean value',
  },
  {
    name: 'onBlur()',
    type: 'function',
    description: 'Callback with event',
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
