import React from 'react';

const layoutContext = React.createContext({
  addClass: () => {},
  removeClass: () => {},
  dir: 'ltr'
});

export default layoutContext;
