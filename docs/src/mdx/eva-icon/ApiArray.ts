import { statusString } from '../shared';

export const iconProps = [
  {
    name: 'name',
    type: 'string',
    description: 'Name of icon you can get list of names from https://akveo.github.io/eva-icons',
  },
  {
    name: 'status',
    type: 'string',
    description: 'Icon status (adds specific styles first letter capital): ' + statusString,
  },
  {
    name: 'className',
    type: 'string',
    description: 'You can add CSS className',
  },
  {
    name: 'options',
    type: 'EvaIconOptions',
    description: 'Additional icon settings',
  },
];

export const evaIconOptions = [
  {
    name: 'width',
    type: 'string',
    description: 'Icon width',
  },
  {
    name: 'height',
    type: 'string',
    description: 'Icon height',
  },
  {
    name: 'fill',
    type: 'string',
    description: 'Icon color',
  },
  {
    name: 'class',
    type: 'string',
    description: 'You can add CSS class',
  },
  {
    name: 'animation',
    type: 'AnimationOption',
    description: 'Additional animation settings',
  },
];

export const animationOption = [
  {
    name: 'type',
    type: 'string',
    description: 'On of this zoom | pulse | shake | flip',
  },
  {
    name: 'hover',
    type: 'boolean',
    description: 'default true',
  },
  {
    name: 'infinite',
    type: 'boolean',
    description: 'default false',
  },
];
