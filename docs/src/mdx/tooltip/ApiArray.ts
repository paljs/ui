import { triggerString, placementString, statusString } from '../shared';

export const tooltipProps = [
  {
    name: 'trigger',
    type: 'string',
    description: `Describes when the container will be shown. Available options: ${triggerString} and it Required`,
  },
  {
    name: 'placement',
    type: 'string',
    description: `Position will be calculated relatively host element based on the position. Can be ${placementString}. and it Required`,
  },
  {
    name: 'content',
    type: 'any',
    description: 'Tooltip message',
  },
  {
    name: 'icon',
    type: 'string | IconProps',
    description: 'icon css classes or EvaIcon component props',
  },
  {
    name: 'status',
    type: 'string',
    description: 'adds specific styles first letter capital: ' + statusString,
  },
  {
    name: 'children',
    type: 'any',
    description: 'this target content can be button link any thing and it Required',
  },
  {
    name: 'eventListener',
    type: 'function',
    description:
      'component have eventListener to scrollArea but if you want to add eventListener to any other container just pass value that accepted in `querySelector` id: #scroll class: .scroll',
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
];
