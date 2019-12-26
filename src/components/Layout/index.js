/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  LayoutStyle,
  LayoutContainer,
  LayoutContent,
  LayoutColumns,
  LayoutColumn,
  HeaderStyle,
  FooterStyle,
} from './style';
import LayoutContext from './layout-context';

function LayoutHeader(props) {
  return (
    <HeaderStyle {...props}>
      <nav>{props.children}</nav>
    </HeaderStyle>
  );
}
LayoutHeader.propTypes = {
  fixed: PropTypes.bool,
};
function LayoutFooter(props) {
  return (
    <FooterStyle {...props}>
      <nav>{props.children}</nav>
    </FooterStyle>
  );
}

function Layout(props) {
  const [className, setClassName] = React.useState(props.className ? [...props.className.split(' ')] : []);

  const scrollRef = React.useRef();

  React.useEffect(() => {
    if ((props.withScroll || props.windowMode) && !className.includes('with-scroll')) {
      addClass(['with-scroll']);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [props.withScroll]);

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

  const addEventListener = (event, listener, target = 'scrollArea') => {
    switch (target) {
      case 'Layout':
        document.getElementById('oah-layout').addEventListener(event, listener);
        break;

      default:
        if (props.withScroll || props.windowMode) {
          scrollRef.current.addEventListener(event, listener);
        } else {
          window.addEventListener(event, listener);
        }
        break;
    }
  };
  const removeEventListener = (event, listener, target = 'scrollArea') => {
    switch (target) {
      case 'Layout':
        document.getElementById('oah-layout').removeEventListener(event, listener);
        break;

      default:
        if (props.withScroll || props.windowMode) {
          scrollRef.current.removeEventListener(event, listener);
        } else {
          window.removeEventListener(event, listener);
        }
        break;
    }
  };

  return (
    <LayoutStyle
      id="oah-layout"
      className={className.join(' ')}
      style={props.style}
      withScroll={props.withScroll}
      windowMode={props.windowMode}
      withSubHeader={props.withSubHeader}
    >
      <LayoutContext.Provider
        value={{
          addClass,
          removeClass,
          removeEventListener,
          addEventListener,
          dir: props.dir,
        }}
      >
        <div ref={scrollRef} className="scrollable-container">
          <div className="layout">{props.children}</div>
        </div>
        <div id="overlay-container" />
      </LayoutContext.Provider>
    </LayoutStyle>
  );
}
Layout.defaultProps = {
  dir: 'ltr',
};

Layout.propTypes = {
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  className: PropTypes.string,
  style: PropTypes.object,
  withScroll: PropTypes.bool,
  windowMode: PropTypes.bool,
  withSubHeader: PropTypes.bool,
};

export {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutColumn,
  LayoutStyle,
  LayoutContext,
};
