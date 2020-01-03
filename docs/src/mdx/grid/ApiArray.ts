export const container = [
  {
    name: 'fluid',
    type: 'Boolean',
    description:
      'Create a responsive fixed width container or a full width container, spanning the entire width of your viewport',
  },
];

export const row = [
  {
    name: 'reverse',
    type: 'Boolean',
    description: 'Use flex-direction: row-reverse.',
  },
  {
    name: 'start',
    type: 'breakpoints',
    description: 'add media with your value to use justify-content: flex-start.',
  },
  {
    name: 'center',
    type: 'breakpoints',
    description: 'add media with your value to use justify-content: center.',
  },
  {
    name: 'end',
    type: 'breakpoints',
    description: 'add media with your value to use justify-content: flex-end.',
  },
  {
    name: 'top',
    type: 'breakpoints',
    description: 'add media with your value to use align-items: flex-start.',
  },
  {
    name: 'middle',
    type: 'breakpoints',
    description: 'add media with your value to use align-items: center.',
  },
  {
    name: 'bottom',
    type: 'breakpoints',
    description: 'add media with your value to use align-items: flex-end.',
  },
  {
    name: 'around',
    type: 'breakpoints',
    description: 'add media with your value to use justify-content: space-around;.',
  },
  {
    name: 'between',
    type: 'breakpoints',
    description: 'add media with your value to use justify-content: space-between.',
  },
];

export const col = [
  {
    name: 'first',
    type: 'boolean',
    description: 'Align elements to the start of row',
  },
  {
    name: 'last',
    type: 'boolean',
    description: 'Align elements to the end of row',
  },
  {
    name: 'order',
    type: 'number',
    description: 'use property to control the visual order of your content.',
  },
  {
    name: 'breakpoint',
    type: 'object',
    description:
      'Object has (xs, is, sm, md, lg, xl, xxl, xxxl) every prop has type (number | boolean )  When number value, it specify the column size on the grid. (1 to 12), When true, enable auto sizing column. When false, hide colomn for the breakpoint.',
  },
  {
    name: 'offset',
    type: 'object',
    description: 'Object has (xs, is, sm, md, lg, xl, xxl, xxxl) every prop has type (number) Offset the column (1-12)',
  },
];
