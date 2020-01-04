export const searchProps = [
  {
    name: 'hint',
    type: 'string',
    description: 'Hint showing under the input field to improve user experience',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Search input placeholder',
  },
  {
    name: 'type',
    type: 'string',
    description:
      'Search design type, available types are modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half',
  },
  {
    name: 'submit()',
    type: 'function',
    description: 'Callback with input value when pres Enter',
  },
  {
    name: 'onChange()',
    type: 'function',
    description: 'Callback with input value when it changed',
  },
];
