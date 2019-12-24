/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes, {InferProps} from 'prop-types';
import { AccordionStyle, ItemStyle } from './style';
import React from 'react';
import { ArrowDown, ArrowUp } from '../../svg';

const AccordionItem: React.FC<InferProps<typeof AccordionItem.propTypes>> = () => {}

AccordionItem.propTypes = {
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const propTypes = {
  multi: PropTypes.bool,
  className: PropTypes.string
};

interface IAccordionRefObject {
  openAll(): void;
  closeAll(): void;
  open(index: number): void;
  close(index: number): void;
  toggle(index: number): void;
}

let Accordion: React.RefForwardingComponent<IAccordionRefObject, InferProps<typeof propTypes>> = (props, ref) => {
  const [items, setItems] = React.useState<InferProps<typeof AccordionItem.propTypes>[]>([]);
  React.useEffect(
    () => {
      const children = React.Children.map(props.children, child => {
        return { ...child.props };
      });
      setItems(children);
    },
    [props.children]
  );

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
      }
    }),
    [items]
  );

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
          updateItems[i].expanded =
            index === i ? state : state ? false : updateItems[i].expanded;
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
          updateItems[i].expanded =
            index === i ? !updateItems[i].expanded : false;
        }
      }
      setItems(updateItems);
    }
  };
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
              {!item.disabled && (
                <i>{item.expanded ? <ArrowUp /> : <ArrowDown />}</i>
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

Accordion.propTypes = propTypes;
export { AccordionItem, Accordion };
