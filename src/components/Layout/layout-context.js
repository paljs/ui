import React from 'react';

const layoutContext = React.createContext({
  addClass: () => {},
  removeClass: () => {}
});

export default layoutContext;
