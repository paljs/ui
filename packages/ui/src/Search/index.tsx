/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { SearchStyle, SearchFieldStyle } from './style';
import Overlay from '../Overlay';
import layoutContext from '../Layout/layout-context';
import { Icon } from '../Icon';
import { Button } from '../Button';

export const Search: React.FC<SearchProps> = (props) => {
  const [value, setValue] = React.useState('');
  const [show, setShow] = React.useState<string | undefined>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const layout = React.useContext(layoutContext);

  React.useEffect(() => {
    if (show === 'show') {
      inputRef.current?.focus();
    } else if (show === undefined) {
      layout.removeClass([props.type]);
    }
  }, [show]);

  const handleOpen = () => {
    setShow('');
    layout.addClass([props.type, 'with-search']);
    setTimeout(() => {
      setShow('show');
    }, 50);
  };

  const handleClose = () => {
    layout.removeClass(['with-search']);
    setShow('');
    setTimeout(() => {
      setShow(undefined);
    }, 200);
  };

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    typeof props.onChange === 'function' && props.onChange(e.target.value);
    setValue(e.target.value);
  };

  return (
    <SearchStyle className={props.className}>
      <Button appearance="ghost" onClick={handleOpen}>
        <Icon name="search-outline" />
      </Button>
      {show !== undefined && (
        <Overlay>
          <SearchFieldStyle className={props.type + ' ' + show}>
            <div
              className="search"
              onKeyUp={(e) => {
                e.preventDefault();
                e.key === 'Escape' && handleClose();
              }}
            >
              <Button appearance="ghost" onClick={handleClose}>
                <Icon name="close-outline" />
              </Button>
              <div className="form-wrapper">
                <div className="form">
                  <div className="form-content">
                    <input
                      ref={inputRef}
                      onKeyUp={(e) => {
                        e.preventDefault();
                        if (e.key === 'Enter') {
                          handleClose();
                          props.submit(value);
                        }
                      }}
                      onChange={onChangeHandle}
                      placeholder={props.placeholder}
                      className="search-input"
                      autoComplete="off"
                      tabIndex={-1}
                      value={value}
                    />
                  </div>
                  <span className="info">{props.hint}</span>
                </div>
              </div>
            </div>
          </SearchFieldStyle>
        </Overlay>
      )}
    </SearchStyle>
  );
};

export interface SearchProps {
  hint?: string;
  placeholder?: string;
  submit: (value: string) => void;
  onChange?: (value: string) => void;
  className?: string;
  type: 'rotate-layout' | 'modal-zoomin' | 'modal-move' | 'modal-drop' | 'modal-half' | 'curtain' | 'column-curtain';
}
