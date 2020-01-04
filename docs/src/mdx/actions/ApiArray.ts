import { sizeString, statusString, positionString } from '../shared';

export const actionsProps = [
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'Component will fill full width of the container',
  },
  {
    name: 'size',
    type: 'string',
    description: 'Size of the component, ' + sizeString,
  },
  {
    name: 'inverse',
    type: 'boolean',
    description: 'Makes colors inverse based on current theme',
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
  {
    name: 'Link',
    type: 'Component',
    description:
      'You must pass Link component here to use it in menu links and must be @reach/router Link component or any other package built in @reach/router like gatsby',
  },
  {
    name: 'actions',
    type: 'array of action ↓',
    description: 'Array of action object see below ↓',
  },
];

export const actionProps = [
  {
    name: 'icon',
    type: 'string | IconProps',
    description: 'icon css classes or EvaIcon component props',
  },
  {
    name: 'link',
    type: 'string',
    description: 'Router link pass',
  },
  {
    name: 'url',
    type: 'string',
    description: 'external url add to href in a tag',
  },
  {
    name: 'target',
    type: 'string',
    description: 'html `a` tag target',
  },
  {
    name: 'events',
    type: 'object',
    description: 'accept object of events link onClick onMouseEnter any event you want',
  },
  {
    name: 'content',
    type: 'any',
    description: 'this will work when icon is empty you can pass any thing component html content text like you want',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the item (changes item opacity and mouse cursor)',
  },
  {
    name: 'badge',
    type: 'object',
    description: `accept object with three keys 
    'status': (adds specific styles): ${statusString}.
    'position': Can be set to any class or to one of predefined positions: ${positionString}
    'title': accept badge contain`,
  },
];
