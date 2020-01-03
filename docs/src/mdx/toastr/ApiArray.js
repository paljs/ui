export const toastrProps = [
  {
    name: 'position',
    type: 'string',
    description:
      'determines where on the screen toast will be rendered [topRight, topLeft, bottomRight, bottomLeft, topStart, topEnd, bottomStart, bottomEnd]. Default is topEnd',
  },
  {
    name: 'status',
    type: 'string',
    description: 'adds specific styles first letter capital: Primary, Info, Success, Warning, Danger, Default.',
  },
  {
    name: 'duration',
    type: 'number',
    description:
      'the time after which the toast will be destroyed. 0 means endless toast, that may be destroyed by click only. Default is 3000 ms.',
  },
  {
    name: 'destroyByClick',
    type: 'boolean',
    description: 'provides a capability to destroy toast by click. Default is true.',
  },
  {
    name: 'preventDuplicates',
    type: 'boolean',
    description:
      "don't create new toast if it has the same title and the same message with previous one.Default is false.",
  },
  {
    name: 'hasIcon',
    type: 'boolean',
    description: 'if true then render toast icon. icon - you can pass icon class that will be applied into the toast.',
  },
  {
    name: 'icons',
    type: 'object',
    description: `you can make default icon for every status by pass in this props object like this 
    {
      Primary: 'ion-ios-mail',
      Warning: 'ion-ios-alert',
      Danger: 'ion-ios-bug',
      Success: 'ion-ios-checkmark-circle',
      Info: 'ion-ios-help-circle'
    }`,
  },
];

export const toastrMethod = [
  {
    name: 'add()',
    type: 'Ref Method',
    description:
      'add(message, title, config) accepts three params, title and config are optional. config type object contain same component props',
  },
];
