export const userProps = [
  {
    name: 'name',
    type: 'string',
    description: 'Specifies a name to be shown on the right of a user picture'
  },
  {
    name: 'title',
    type: 'string',
    description:
      'Specifies a title (written in a smaller font) to be shown under the name'
  },
  {
    name: 'onlyPicture',
    type: 'boolean',
    description:
      'Whether to show only a picture or also show the name and title'
  },
  {
    name: 'image',
    type: 'string',
    description:
      'Absolute path to a user picture. Or base64 image User name initials (JD for John Doe) will be shown if no picture specified'
  },
  {
    name: 'color',
    type: 'string',
    description: 'Color of the area shown when no picture specified'
  },
  {
    name: 'inverse',
    type: 'string',
    description: 'Makes colors inverse based on current theme'
  },
  {
    name: 'showInitials',
    type: 'boolean',
    description:
      'Whether to show a user initials (if no picture specified) or not'
  },
  {
    name: 'size',
    type: 'string',
    description:
      'Size of the component available sizes: SM, MD, LG, XL default: MD'
  },
  {
    name: 'badge',
    type: 'object',
    description: `accept object with three keys 
    'status': (adds specific styles): Info, Success, Danger, Primary, Warning.
    'position': Can be set to one of predefined positions: 
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
