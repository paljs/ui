export const accordionProps = [
  {
    name: 'multi',
    type: 'boolean',
    description: 'Allow multiple items to be expanded at the same time default: false.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'You can pass any css class to modify style',
  },
  {
    name: 'children',
    type: 'array',
    description: 'Array of AccordionItem components',
  },
  {
    name: 'ref',
    type: 'React.RefObject<AccordionRefObject>',
    description: 'react ref',
  },
];

export const accordionMethod = [
  {
    name: 'openAll()',
    type: 'Ref Method',
    description: 'Opens all enabled accordion items',
  },
  {
    name: 'closeAll()',
    type: 'Ref Method',
    description: 'Closes all enabled accordion items',
  },
  {
    name: 'open()',
    type: 'Ref Method',
    description: 'Open enabled accordion item. accepts number value start from 0',
  },
  {
    name: 'close()',
    type: 'Ref Method',
    description: 'Close enabled accordion item. accepts number value start from 0',
  },
  {
    name: 'toggle()',
    type: 'Ref Method',
    description: 'Toggle enabled accordion item. accepts number value start from 0',
  },
];

export const accordionItemProps = [
  {
    name: 'title',
    type: 'string',
    description: 'Item header and it Required',
  },
  {
    name: 'expanded',
    type: 'boolean',
    description: 'expand item default: false',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'disable item default: false',
  },
];
