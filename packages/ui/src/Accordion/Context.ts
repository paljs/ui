/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

interface ContextProps {
  keys: number[];
  setKeys: React.Dispatch<React.SetStateAction<number[]>>;
  expanded: number[];
  disabled: number[];
  handleToggle: (uniqueKey: number) => void;
}

const initialContext: ContextProps = {
  keys: [],
  setKeys: () => {},
  handleToggle: () => {},
  expanded: [],
  disabled: [],
};

const AccordionContext: React.Context<ContextProps> = React.createContext(initialContext);

export default AccordionContext;
