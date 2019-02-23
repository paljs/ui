export const contextProps = [
  {
    name: 'items',
    type: 'array of item',
    description: 'this contain array of menu item see down to know item props ↓'
  },
  {
    name: 'Link',
    type: 'Component',
    description:
      'You must pass Link component here to use it in menu links and must be @reach/router Link component or any other package built in @reach/router like gatsby'
  },
  {
    name: 'placement',
    type: 'string',
    description:
      'Position will be calculated relatively host element based on the position. Can be top, right, bottom, left, start or end. and it Required'
  },
  {
    name: 'children',
    type: 'any',
    description:
      'this target content can be button link any thing and it Required'
  },
  {
    name: 'eventListener',
    type: 'function',
    description:
      'component have eventListener to scrollArea but if you want to add eventListener to any other container just pass value that accepted in `querySelector` id: #scroll class: .scroll'
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
