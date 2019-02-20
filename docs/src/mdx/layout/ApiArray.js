export const layoutProps = [
  {
    name: 'dir',
    type: 'string',
    description: 'It take RTL or LTR to change direction of page'
  },
  {
    name: 'windowMode',
    type: 'boolean',
    description:
      'Defines whether the layout enters a `window` mode, when the layout content (including sidebars and fixed header) becomes centered by width with a margin from the top of the screen, like a floating window. Automatically enables withScroll mode, as in the window mode scroll must be inside the layout and cannot be on window'
  },
  {
    name: 'withScroll',
    type: 'boolean',
    description:
      'Defines whether to move the scrollbars to layout or leave it at the body level. Automatically set to true when windowMode is enabled'
  },
  {
    name: 'withSubHeader',
    type: 'boolean',
    description:
      'Defines when you have sub header and want remove sidebar shadow'
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

export const layoutMethod = [
  {
    name: 'addClass()',
    type: 'LayoutContext function',
    description:
      'take one property with array of css classes by LayoutContext Api'
  },
  {
    name: 'removeClass()',
    type: 'LayoutContext function',
    description:
      'take one property with array of css classes by LayoutContext Api'
  },
  {
    name: 'addEventListener()',
    type: 'LayoutContext function',
    description: `take three property first event name 
      second listener function third target 
      default (scrollArea) but you can pass (Layout)`
  },
  {
    name: 'removeEventListener()',
    type: 'LayoutContext function',
    description: `take three property first event name 
      second listener function third target 
      default (scrollArea) but you can pass (Layout)`
  }
];

export const headerProps = [
  {
    name: 'fixed',
    type: 'boolean',
    description: 'Makes the header sticky to the top of the Layout.'
  }
];

export const columnProps = [
  {
    name: 'position',
    type: 'string',
    description:
      'when pass `left` Move the column to the very left position in the layout. when pass `start` Make column first in the layout.'
  }
];
