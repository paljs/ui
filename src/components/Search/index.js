/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { SearchStyle, SearchFieldStyle } from './style';
import { SearchIcon, CloseCircled } from '../../svg';
import Overlay from '../Overlay';

function Search(props) {
  const [value, setValue] = useState('');
  const [layout, setLayout] = useState();
  const [show, setShow] = useState();
  const inputRef = useRef();

  useEffect(() => {
    const layoutD = document.getElementById('oah-layout');
    setLayout(layoutD);
  }, []);

  const handleOpen = () => {
    setShow('');
    setTimeout(() => {
      layout.classList.add(props.type, 'with-search');
      setShow('show');
      inputRef.current.focus();
    }, 100);
  };

  const handleClose = () => {
    layout.classList.remove('with-search');
    setShow('');
    setTimeout(() => {
      setShow(undefined);
      layout.classList.remove(props.type);
    }, 500);
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
