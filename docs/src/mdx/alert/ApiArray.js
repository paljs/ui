export const alertProps = [
  {
    name: 'size',
    type: 'string',
    description: 'Size of the component, XXS | XS | SM | MD | LG | XL | XXL'
  },
  {
    name: 'status',
    type: 'string',
    description:
      'Field status (adds specific styles): Info, Success, Warning, Danger, Primary, Active, Disabled'
  },
  {
    name: 'accent',
    type: 'string',
    description:
      'Alert accent (color of the top border): Info, Success, Warning, Danger, Primary, Active, Disabled'
  },
  {
    name: 'outline',
    type: 'string',
    description:
      'Alert outline (color of the border): Info, Success, Warning, Danger, Primary, Active, Disabled'
  },
  {
    name: 'closable',
    type: 'boolean',
    description: 'Shows close icon'
  },
  {
    name: 'onClose()',
    type: 'function',
    description: 'Callback when close button clicked'
  }
];
