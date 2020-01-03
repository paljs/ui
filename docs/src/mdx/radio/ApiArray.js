export const radioProps = [
  {
    name: 'name',
    type: 'string',
    description: 'input tag name',
  },
  {
    name: 'onChange()',
    type: 'function',
    description: 'Callback with option value',
  },
  {
    name: 'options',
    type: 'Array of option ↓',
    description: 'array of option object ↓',
  },
];

export const optionProps = [
  {
    name: 'value',
    type: 'string',
    description: 'option value',
  },
  {
    name: 'label',
    type: 'string',
    description: 'option label',
  },
  {
    name: 'checked',
    type: 'boolean',
    description: 'checked that option',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'disabled that option',
  },
  {
    name: 'status',
    type: 'string',
    description: 'option status (Success, Warning, Danger)',
  },
];
