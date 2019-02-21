export const tabsProps = [
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'Take full width of a parent'
  },
  {
    name: 'onSelect()',
    type: 'function',
    description: 'Callback selected index when tab clicked'
  },
  {
    name: 'activeIndex',
    type: 'number',
    description: 'this start active tab index default: 0'
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

export const tabProps = [
  {
    name: 'title',
    type: 'string',
    description: 'tab title'
  },
  {
    name: 'icon',
    type: 'string',
    description: 'tab css class icon'
  },
  {
    name: 'responsive',
    type: 'boolean',
    description:
      'Show only icons when width is smaller than `576px` you can change it in theme settings key `tabsIconOnlyMaxWidth`'
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'tab is disabled and cannot be opened.'
  },
  {
    name: 'badge',
    type: 'object',
    description: `accept object with three keys 
    'status': (adds specific styles): Info, Success, Danger, Primary, Warning.
    'position': Can be set to any class or to one of predefined positions: 
    topRight, topLeft, bottomRight, bottomLeft, topStart, topEnd, bottomStart, bottomEnd
    'title': accept badge contain`
  },
  {
    name: 'className',
    type: 'string',
    description: 'You can pass any css class to modify title style'
  },
  {
    name: 'style',
    type: 'object',
    description: 'You can pass any css object to modify title style'
  }
];
