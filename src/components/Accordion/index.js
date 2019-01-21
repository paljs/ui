/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';
import { AccordionStyle, ItemStyle } from './style';
import React, {
  useEffect,
  Children,
  useState,
  forwardRef,
  useImperativeMethods
} from 'react';
import { ArrowDown, ArrowUp } from '../../svg';

function AccordionItem() {}

AccordionItem.propTypes = {
  disabled: PropTypes.bool,
  expanded: PropTypes.bool
};

const Accordion = forwardRef((props, ref) => {
  const [items, setItems] = useState([]);
  useEffect(
    () => {
      const children = Children.map(props.children, child => {
        return { ...child.props };
      });
      setItems(children);
    },
    [props.children]
  );

  useImperativeMethods(ref, () => ({
    openAll() {
      handleAllState(true);
    },
    closeAll() {
      handleAllState(false);
    },
    open(index) {
      handleState(true, index);
    },
    close(index) {
      handleState(false, index);
    },
    toggle(index) {
      handleToggle(index);
    }
  }));

  const handleAllState = state => {
    const updateItems = [...items];
    for (const item of updateItems) {
      item.expanded = state;
    }
    setItems(updateItems);
  };
  const handleState = (state, index) => {
    const updateItems = [...items];
    if (props.multi) {
      updateItems[index].expanded = state;
    } else {
      for (const i of updateItems.keys()) {
        updateItems[i].expanded =
          index === i ? state : state ? false : updateItems[i].expanded;
      }
    }
    setItems(updateItems);
  };
  const handleToggle = index => {
    const updateItems = [...items];
    if (props.multi) {
      updateItems[index].expanded = !updateItems[index].expanded;
    } else {
      for (const i of updateItems.keys()) {
        updateItems[i].expanded =
          index === i ? !updateItems[i].expanded : false;
      }
    }
    setItems(updateItems);
  };
  return (
    <AccordionStyle>
      {items.map((item, index) => {
        const cssStyle = [];
        item.expanded ? cssStyle.push('expanded') : cssStyle.push('collapsed');
        item.disabled && cssStyle.push('disabled');
        return (
          <ItemStyle key={index} className={cssStyle.join(' ')}>
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
});
Accordion.propTypes = {
  multi: PropTypes.bool
};
export { AccordionItem, Accordion };
