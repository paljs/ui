/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Icons } from '@paljs/icons';

interface ContextProps {
  addClass: (className: string[]) => void;
  removeClass: (className: string[]) => void;
  addEventListener: (event: string, listener: EventListener, target?: 'scrollArea' | 'Layout') => void;
  removeEventListener: (event: string, listener: EventListener, target?: 'scrollArea' | 'Layout') => void;
  dir?: 'ltr' | 'rtl';
  evaIcons?: Icons;
  children?: React.ReactNode;
}

const initialContext: ContextProps = {
  dir: 'ltr',
  addClass(_: string[]) {},
  removeClass(_: string[]) {},
  addEventListener(_: string, __: EventListener) {},
  removeEventListener(_: string, __: EventListener) {},
};

const LayoutContext: React.Context<ContextProps> = React.createContext(initialContext);

export default LayoutContext;
