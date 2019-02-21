export const sidebarProps = [
  {
    name: 'state',
    type: 'string',
    description:
      'Initial sidebar state, expanded | compacted | visible | hidden default: expanded'
  },
  {
    name: 'property',
    type: 'string',
    description:
      'can be placed sidebar in right | left | start | end of layout default: start'
  },
  {
    name: 'fixed',
    type: 'boolean',
    description: 'Makes sidebar fixed (shown above the layout content)'
  },
  {
    name: 'containerFixed',
    type: 'boolean',
    description: 'Makes sidebar container fixed'
  },
  {
    name: 'responsive',
    type: 'boolean',
    description:
      'Makes sidebar listen to media query events and change its behavior'
  },
  {
    name: 'compactedBreakpoints',
    type: 'array of string',
    description:
      'Controls on which screen sizes sidebar should be switched to compacted state. Works only when responsive mode is on. Default values are [\'xs\', \'is\', \'sm\', \'md\', \'lg\'].'
  },
  {
    name: 'hiddenBreakpoints',
    type: 'array of string',
    description:
      'Controls on which screen sizes sidebar should be switched to collapsed state. Works only when responsive mode is on. Default values are [\'xs\', \'is\'].'
  }
];

export const sidebarMethod = [
  {
    name: 'toggle()',
    type: 'Ref Method',
    description:
      'change sidebar state if in expanded take to compacted if in hidden take to visible and opposite'
  },
  {
    name: 'hide()',
    type: 'Ref Method',
    description:
      'change sidebar state if in hidden take to visible it used in Menu component to hide sidebar after click link'
  }
];
