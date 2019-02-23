export const selectProps = [
  {
    name: 'customLabel',
    type: 'any',
    description:
      'you can send custom label to see it even change value like themes select in this site ↑'
  },
  {
    name: 'multiple',
    type: 'boolean',
    description: 'Gives capability just write multiple over the element.'
  },
  {
    name: 'value',
    type: 'any',
    description:
      'accept any type of value when multiple activated will accept array of values'
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'placeholder show when no value selected'
  },
  {
    name: 'onChange()',
    type: 'function',
    description: 'Callback with value will bbe array if multiple activated'
  },
  {
    name: 'eventListener',
    type: 'function',
    description:
      'component have eventListener to scrollArea but if you want to add eventListener to any other container just pass value that accepted in `querySelector` id: #scroll class: .scroll'
  },
  {
    name: 'options',
    type: 'array of option',
    description:
      'this take array of object {value: `any`,label: `any`,selected: `boolean`,disabled: `boolean`}'
  },
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
      'Field status (adds specific styles): Info, Success, Warning, Danger, Primary'
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
