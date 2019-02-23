export const inputProps = [
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'If set element will fill container'
  },
  {
    name: 'status',
    type: 'string',
    description:
      'Field status (adds specific styles): Info, Success, Warning, Danger'
  },
  {
    name: 'fieldSize',
    type: 'string',
    description: 'Field size, available sizes: SM, MD, LG default: MD'
  },
  {
    name: 'shape',
    type: 'string',
    description: 'Field shapes: Rectangle, Round, SemiRound default: Rectangle'
  },
  {
    name: 'className',
    type: 'string',
    description: 'You can pass any css class to modify style'
  },
  {
    name: 'style',
    type: 'object',
    description: 'You can pass any css object to modify style'
  }
];
