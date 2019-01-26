/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import PropTypes from 'prop-types';
import LayoutStyle from './style';
import { useState } from 'react';
import LayoutContext from './layout-context';

function LayoutHeader(props) {
  return (
    <header className={props.fixed ? 'fixed layout-header' : 'layout-header'}>
      <nav>{props.children}</nav>
    </header>
  );
}
LayoutHeader.propTypes = {
  fixed: PropTypes.bool
};
function LayoutFooter(props) {
  return (
    <footer className="layout-footer">
      <nav>{props.children}</nav>
    </footer>
  );
}

function LayoutColumns(props) {
  return (
    <div className="columns">
      <div className="main-container">{props.children}</div>
    </div>
  );
}

function LayoutContent(props) {
  return <div className="content">{props.children}</div>;
}
function LayoutContainer(props) {
  return <div className="layout-container">{props.children}</div>;
}

function Layout(props) {
  const [className, setClassName] = useState(
    props.className ? [...props.className.split(' ')] : []
  );

  const addClass = cssClass => {
    const updatedClass = [...className];
    updatedClass.push(...cssClass);
    setClassName(updatedClass);
  };

  const removeClass = cssClass => {
    const updatedClass = [...className];
    for (const i of updatedClass.keys()) {
      if (cssClass.includes(updatedClass[i])) {
        updatedClass.splice(i, 1);
      }
    }
    setClassName(updatedClass);
  };

  return (
    <LayoutStyle
      id="oah-layout"
      className={className.join(' ')}
      style={props.style}
    >
      <LayoutContext.Provider value={{ addClass, removeClass }}>
        <div className="scrollable-container">
          <div className="layout">{props.children}</div>
        </div>
        <div id="overlay-container" />
      </LayoutContext.Provider>
    </LayoutStyle>
  );
}
export {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutStyle
};
