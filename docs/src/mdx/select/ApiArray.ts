import { buttonProps } from '../button/ApiArray';

export const selectProps = [
  {
    name: 'customLabel',
    type: 'any',
    description: 'you can send custom label to see it even change value like themes select in this site ↑',
  },
  {
    name: 'multiple',
    type: 'boolean',
    description: 'Gives capability just write multiple over the element.',
  },
  {
    name: 'value',
    type: 'any',
    description: 'accept any type of value when multiple activated will accept array of values',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'placeholder show when no value selected',
  },
  {
    name: 'onChange()',
    type: 'function',
    description: 'Callback with value will bbe array if multiple activated',
  },
  {
    name: 'eventListener',
    type: 'function',
    description:
      'component have eventListener to scrollArea but if you want to add eventListener to any other container just pass value that accepted in `querySelector` id: #scroll class: .scroll',
  },
  {
    name: 'options',
    type: 'array of option',
    description: 'this take array of object {value: `any`,label: `any`,selected: `boolean`,disabled: `boolean`}',
  },
].concat(buttonProps);
