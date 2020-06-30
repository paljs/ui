/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
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
import { Icons } from '@paljs/icons';

const LayoutHeader: React.FC<{ fixed?: boolean; className?: string }> = (props) => {
  const className = props.className ? props.className.split(' ') : [];
  props.fixed && className.push('fixed');
  return (
    <HeaderStyle className={className.join(' ')}>
      <nav>{props.children}</nav>
    </HeaderStyle>
  );
};

const LayoutFooter: React.FC = (props) => {
  return (
    <FooterStyle {...props}>
      <nav>{props.children}</nav>
    </FooterStyle>
  );
};

interface LayoutProps {
  dir?: 'ltr' | 'rtl';
  className?: string;
  style?: React.CSSProperties;
  withScroll?: boolean;
  windowMode?: boolean;
  withSubHeader?: boolean;
  evaIcons?: Icons;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [className, setClassName] = React.useState<string[]>(props.className ? [...props.className.split(' ')] : []);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const addClass = (cssClass: string[]) => {
    const updatedClass = [...className];
    updatedClass.push(...cssClass);
    setClassName(updatedClass);
  };

  React.useEffect(() => {
    if ((props.withScroll || props.windowMode) && !className.includes('with-scroll')) {
      addClass(['with-scroll']);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [props.withScroll]);

  const removeClass = (cssClass: string[]) => {
    const updatedClass = [...className];
    for (const i of updatedClass.keys()) {
      if (cssClass.includes(updatedClass[i])) {
        updatedClass.splice(i, 1);
      }
    }
    setClassName(updatedClass);
  };

  const addEventListener = (event: string, listener: EventListener, target = 'scrollArea') => {
    switch (target) {
      case 'Layout':
        document.getElementById('oah-layout')!.addEventListener(event, listener);
        break;

      default:
        if ((props.withScroll || props.windowMode) && scrollRef.current) {
          scrollRef?.current.addEventListener(event, listener);
        } else {
          window.addEventListener(event, listener);
        }
        break;
    }
  };

  const removeEventListener = (event: string, listener: EventListener, target = 'scrollArea') => {
    switch (target) {
      case 'Layout':
        document.getElementById('oah-layout')!.removeEventListener(event, listener);
        break;

      default:
        if ((props.withScroll || props.windowMode) && scrollRef.current) {
          scrollRef?.current.removeEventListener(event, listener);
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
          evaIcons: props.evaIcons,
        }}
      >
        <div ref={scrollRef} className="scrollable-container">
          <div className="layout">{props.children}</div>
        </div>
        <div id="overlay-container" />
      </LayoutContext.Provider>
    </LayoutStyle>
  );
};

Layout.defaultProps = {
  dir: 'ltr',
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
