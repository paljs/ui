/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React, { useState, useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SearchStyle, SearchFieldStyle } from './style';
import { SearchIcon, CloseCircled } from '../../svg';
import Overlay from '../Overlay';
import layoutContext from '../Layout/layout-context';

function Search(props) {
  const [value, setValue] = useState('');
  const [show, setShow] = useState();
  const inputRef = useRef();
  const layout = useContext(layoutContext);

  useEffect(
    () => {
      if (show === 'show') {
        inputRef.current.focus();
      } else if (show === undefined) {
        layout.removeClass([props.type]);
      }
    },
    [show]
  );

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

  const onChangeHandle = e => {
    typeof props.onChange === 'function' && props.onChange(e.target.value);
    setValue(e.target.value);
  };

  return (
    <SearchStyle className={props.className}>
      <button onClick={handleOpen}>
        <SearchIcon />
      </button>
      {show !== undefined && (
        <Overlay>
          <SearchFieldStyle className={props.type + ' ' + show}>
            <div
              className="search"
              onKeyUp={e => {
                e.preventDefault();
                e.key === 'Escape' && handleClose();
              }}
            >
              <button onClick={handleClose}>
                <CloseCircled />
              </button>
              <div className="form-wrapper">
                <div className="form">
                  <div className="form-content">
                    <input
                      ref={inputRef}
                      onKeyUp={e => {
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
                      tabIndex="-1"
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
}
Search.propTypes = {
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  submit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'rotate-layout',
    'modal-zoomin',
    'modal-move',
    'modal-drop',
    'modal-half',
    'curtain',
    'column-curtain'
  ]).isRequired
};

export default Search;
