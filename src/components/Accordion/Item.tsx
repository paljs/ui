import React from 'react';
import AccordionContext from './Context';
import { ItemStyle } from './style';
import { Icon } from '../Icon';

interface AccordionItemPropTypes {
  title: any;
  uniqueKey: number;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemPropTypes> = ({ title, uniqueKey, children }) => {
  const { expanded, disabled, handleToggle, keys, setKeys } = React.useContext(AccordionContext);

  React.useEffect(() => {
    setKeys([...keys, uniqueKey]);
  }, []);

  const state = {
    expanded: expanded.includes(uniqueKey),
    disabled: disabled.includes(uniqueKey),
  };

  const cssStyle = [];
  state.expanded ? cssStyle.push('expanded') : cssStyle.push('collapsed');
  state.disabled && cssStyle.push('disabled');

  return (
    <ItemStyle className={cssStyle.join(' ')}>
      <header onClick={() => handleToggle(uniqueKey)}>
        {title}
        {!state.disabled && state.expanded ? (
          <Icon className="expansion-indicator" name="chevron-up-outline" />
        ) : (
          <Icon className="expansion-indicator" name="chevron-down-outline" />
        )}
      </header>
      <div className={state.expanded ? 'expanded' : 'collapsed'}>
        <div className="item-body">{children}</div>
      </div>
    </ItemStyle>
  );
};
