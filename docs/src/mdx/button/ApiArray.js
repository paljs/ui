export const buttonProps = [
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'If set element will fill its container'
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the button'
  },
  {
    name: 'hero',
    type: 'boolean',
    description: 'Adds `hero` styles'
  },
  {
    name: 'outline',
    type: 'boolean',
    description: 'Adds `outline` styles'
  },
  {
    name: 'size',
    type: 'string',
    description: 'Field size, available sizes: XS, SM, MD, LG default: MD'
  },
  {
    name: 'shape',
    type: 'string',
    description: 'Field shapes: Rectangle, Round, SemiRound default: Rectangle'
  },
  {
    name: 'status',
    type: 'string',
    description:
      'Field status (adds specific styles): Info, Success, Warning, Danger, Primary, Secondary'
  },
  {
    name: 'pulse',
    type: 'boolean',
    description: 'make button Pulsing'
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
