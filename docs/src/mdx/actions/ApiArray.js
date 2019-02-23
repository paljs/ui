export const actionsProps = [
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'Component will fill full width of the container'
  },
  {
    name: 'size',
    type: 'string',
    description: 'Size of the component, SM | MD | LG'
  },
  {
    name: 'inverse',
    type: 'boolean',
    description: 'Makes colors inverse based on current theme'
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
  },
  {
    name: 'actions',
    type: 'array of action ↓',
    description: 'Array of action object see below ↓'
  }
];

export const actionProps = [
  {
    name: 'icon',
    type: 'string',
    description: 'icon css classes'
  },
  {
    name: 'link',
    type: 'string',
    description: 'Router link pass'
  },
  {
    name: 'url',
    type: 'string',
    description: 'external url add to href in a tag'
  },
  {
    name: 'target',
    type: 'string',
    description: 'html `a` tag target'
  },
  {
    name: 'events',
    type: 'object',
    description:
      'accept object of events link onClick onMouseEnter any event you want'
  },
  {
    name: 'content',
    type: 'any',
    description:
      'this will work when icon is empty you can pass any thing component html content text like you want'
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the item (changes item opacity and mouse cursor)'
  },
  {
    name: 'badge',
    type: 'object',
    description: `accept object with three keys 
    'status': (adds specific styles): Info, Success, Danger, Primary, Warning.
    'position': Can be set to any class or to one of predefined positions: 
    topRight, topLeft, bottomRight, bottomLeft, topStart, topEnd, bottomStart, bottomEnd
    'title': accept badge contain`
  }
];
