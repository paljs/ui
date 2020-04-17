/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AccordionStyle } from './style';
import React from 'react';
import AccordionContext from './Context';
import { AccordionItem } from './Item';

interface AccordionProps {
  disabled?: number[];
  expanded?: number[];
  multi?: boolean;
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<AccordionRefObject>;
}

export interface AccordionRefObject {
  openAll(): void;
  closeAll(): void;
  open(index: number): void;
  close(index: number): void;
  toggle(index: number): void;
}

const Accordion = React.forwardRef<AccordionRefObject, AccordionProps>((props, ref) => {
  const [expanded, setExpanded] = React.useState<number[]>(props.expanded ?? []);
  const [keys, setKeys] = React.useState<number[]>([]);

  const handleAllState = (state: boolean) => {
    if (state) {
      const items: number[] = [];
      keys.forEach((key) => !(props.disabled && props.disabled.includes(key)) && items.push(key));
      setExpanded(items);
    } else {
      setExpanded([]);
    }
  };

  const handleState = (state: boolean, uniqueKey: number) => {
    const index = expanded.indexOf(uniqueKey);
    const newKeys = [...expanded];
    if (index > -1 && !state) {
      newKeys.splice(index, 1);
    }
    if (index < 0 && state) {
      newKeys.push(uniqueKey);
    }
    setExpanded(newKeys);
  };

  const handleToggle = (uniqueKey: number) => {
    if (!props.disabled?.includes(uniqueKey)) {
      const index = expanded.indexOf(uniqueKey);
      if (props.multi) {
        const newKeys = [...expanded];
        if (index > -1) {
          newKeys.splice(index, 1);
        } else {
          newKeys.push(uniqueKey);
        }
        setExpanded(newKeys);
      } else {
        if (index > -1) {
          setExpanded([]);
        } else {
          setExpanded([uniqueKey]);
        }
      }
    }
  };

  React.useImperativeHandle(
    ref,
    () => ({
      openAll() {
        handleAllState(true);
      },
      closeAll() {
        handleAllState(false);
      },
      open(uniqueKey: number) {
        handleState(true, uniqueKey);
      },
      close(uniqueKey: number) {
        handleState(false, uniqueKey);
      },
      toggle(uniqueKey: number) {
        handleToggle(uniqueKey);
      },
    }),
    [expanded, keys, props.disabled],
  );

  return (
    <AccordionContext.Provider value={{ expanded, setKeys, keys, handleToggle, disabled: props.disabled ?? [] }}>
      <AccordionStyle className={props.className}>{props.children}</AccordionStyle>
    </AccordionContext.Provider>
  );
});

Accordion.displayName = 'Accordion';
export { AccordionItem, Accordion };
