/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AccordionStyle, ItemStyle } from './style';
import React from 'react';
import { Icon } from '../Icon';

interface AccordionItemPropTypes {
  disabled?: boolean;
  expanded?: boolean;
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemPropTypes> = () => {
  return <div />;
};

interface AccordionProps {
  multi: boolean;
  className: string;
  children: React.ReactElement<AccordionItemPropTypes>[];
}

interface AccordionRefObject {
  openAll(): void;
  closeAll(): void;
  open(index: number): void;
  close(index: number): void;
  toggle(index: number): void;
}

let Accordion: React.RefForwardingComponent<AccordionRefObject, AccordionProps> = (props, ref) => {
  const [items, setItems] = React.useState<AccordionItemPropTypes[]>([]);
  React.useEffect(() => {
    const children: AccordionItemPropTypes[] = React.Children.map(props.children, child => {
      if (!React.isValidElement<AccordionItemPropTypes>(child)) {
        return false;
      }
      return { ...child.props };
    }).filter((child): boolean => !!child) as AccordionItemPropTypes[];
    setItems(children);
  }, [props.children]);

  const handleAllState = (state: boolean) => {
    const updateItems = [...items];
    for (const item of updateItems) {
      if (!item.disabled) {
        item.expanded = state;
      }
    }
    setItems(updateItems);
  };
  const handleState = (state: boolean, index: number) => {
    const updateItems = [...items];
    if (!updateItems[index].disabled) {
      if (props.multi) {
        updateItems[index].expanded = state;
      } else {
        for (const i of updateItems.keys()) {
          updateItems[i].expanded = index === i ? state : state ? false : updateItems[i].expanded;
        }
      }
      setItems(updateItems);
    }
  };
  const handleToggle = (index: number) => {
    const updateItems = [...items];
    if (!updateItems[index].disabled) {
      if (props.multi) {
        updateItems[index].expanded = !updateItems[index].expanded;
      } else {
        for (const i of updateItems.keys()) {
          updateItems[i].expanded = index === i ? !updateItems[i].expanded : false;
        }
      }
      setItems(updateItems);
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
      open(index: number) {
        handleState(true, index);
      },
      close(index: number) {
        handleState(false, index);
      },
      toggle(index: number) {
        handleToggle(index);
      },
    }),
    [items],
  );

  return (
    <AccordionStyle {...props}>
      {items.map((item, index) => {
        const cssStyle = [];
        item.expanded ? cssStyle.push('expanded') : cssStyle.push('collapsed');
        item.disabled && cssStyle.push('disabled');
        return (
          <ItemStyle key={index} {...item} className={cssStyle.join(' ')}>
            <header onClick={() => handleToggle(index)}>
              {item.title}
              {!item.disabled && item.expanded ? (
                <Icon className="expansion-indicator" name="chevron-up-outline" />
              ) : (
                <Icon className="expansion-indicator" name="chevron-down-outline" />
              )}
            </header>
            <div className={item.expanded ? 'expanded' : 'collapsed'}>
              <div className="item-body">{item.children}</div>
            </div>
          </ItemStyle>
        );
      })}
    </AccordionStyle>
  );
};

Accordion = React.forwardRef(Accordion);
export { AccordionItem, Accordion };
