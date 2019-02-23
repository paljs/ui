export const menuProps = [
  {
    name: 'items',
    type: 'array of item',
    description: 'this contain array of menu item see down to know item props ↓'
  },
  {
    name: 'toggleSidebar',
    type: 'function',
    description:
      'when you put menu inside sidebar you can pass here toggleSidebar={() => sidebarRef.current.hide()} like this to hide sidebar when user click menu'
  },
  {
    name: 'Link',
    type: 'Component',
    description:
      'You must pass Link component here to use it in menu links and must be @reach/router Link component or any other package built in @reach/router like gatsby'
  },
  {
    name: 'className',
    type: 'string',
    description:
      'You can pass any css class to modify style. you have option add \'inverse\' Makes colors inverse based on current theme'
  },
  {
    name: 'style',
    type: 'object',
    description: 'You can pass any css object to modify style'
  }
];

export const menuMethod = [
  {
    name: 'toggle()',
    type: 'Ref Method',
    description: 'toggle all menu items default: collapsed'
  }
];

export const itemProps = [
  {
    name: 'title',
    type: 'string',
    description: 'Item title'
  },
  {
    name: 'link',
    type: 'string',
    description: 'Router link use for Link component'
  },
  {
    name: 'icon',
    type: 'string',
    description: 'css icon class'
  },
  {
    name: 'group',
    type: 'boolean',
    description: 'Whether the item is just a group (non-clickable)'
  },
  {
    name: 'expanded',
    type: 'boolean',
    description: 'expand item if have children from start'
  },
  {
    name: 'hidden',
    type: 'boolean',
    description: 'hide item'
  },
  {
    name: 'target',
    type: 'string',
    description: 'html a tag target'
  },
  {
    name: 'url',
    type: 'string',
    description: 'external link will use a tag not Link component'
  },
  {
    name: 'children',
    type: 'array of item',
    description: 'it take all this props ↑'
  }
];
