import React from 'react';
import { Icons } from '../../../eva-icon/src/types';

interface ContextProps {
  addClass?: (className: string[]) => void;
  removeClass?: (className: string[]) => void;
  addEventListener?: (event: string, listener: EventListener, target: 'scrollArea' | 'Layout') => void;
  removeEventListener?: (event: string, listener: EventListener, target: 'scrollArea' | 'Layout') => void;
  dir?: 'ltr' | 'rtl';
  evaIcons?: Icons;
  children?: React.ReactNode;
}

const initialContext: ContextProps = {
  dir: 'ltr',
};

const LayoutContext: React.Context<ContextProps> = React.createContext(initialContext);

export default LayoutContext;
