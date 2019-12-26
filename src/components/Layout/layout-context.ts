import React from 'react';

interface ContextProps {
  addClass?: (className: string[]) => void;
  removeClass?: (className: string[]) => void;
  addEventListener?: (event: string, listener: EventListener, target: 'scrollArea' | 'Layout') => void;
  removeEventListener?: (event: string, listener: EventListener, target: 'scrollArea' | 'Layout') => void;
  dir?: 'ltr' | 'rtl';
  children?: React.ReactNode;
}

const initialContext: ContextProps = {
  dir: 'ltr',
};

const LayoutContext: React.Context<ContextProps> = React.createContext(initialContext);

export default LayoutContext;
