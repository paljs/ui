import React from 'react';

const layoutContext = React.createContext({
  addClass: () => {},
  removeClass: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dir: 'ltr'
});

export default layoutContext;
