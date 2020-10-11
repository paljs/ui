/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import SidebarStyle from './style';
import { ifWidthInBreakpoint, BreakPointKeys } from '../breakpoints';

export interface SidebarStyleProps {
  state?: 'hidden' | 'visible' | 'compacted' | 'expanded';
  property?: 'right' | 'left' | 'start' | 'end';
  fixed?: boolean;
  containerFixed?: boolean;
  getState?: (state?: 'hidden' | 'visible' | 'compacted' | 'expanded') => void;
  className?: string;
}

export interface SidebarProps extends SidebarStyleProps {
  compactedBreakpoints?: BreakPointKeys[];
  hiddenBreakpoints?: BreakPointKeys[];
  responsive?: boolean;
  children?: React.ReactNode[] | React.ReactNode;
  ref?: React.RefObject<SidebarRefObject>;
}

export interface SidebarRefObject {
  toggle: () => void;
  hide: () => void;
}

const Sidebar = React.forwardRef<SidebarRefObject, SidebarProps>((props, ref) => {
  const [fixed, setFixed] = React.useState(props.fixed);
  const [state, setState] = React.useState(props.state);

  React.useImperativeHandle(
    ref,
    () => ({
      toggle() {
        switch (state) {
          case 'expanded':
            setState('compacted');
            break;
          case 'compacted':
            setState('expanded');
            break;
          case 'hidden':
            setState('visible');
            break;
          case 'visible':
            setState('hidden');
            break;
        }
      },
      hide() {
        if (state === 'visible') {
          setState('hidden');
        }
      },
    }),
    [state],
  );

  const mouseEnter = () => {
    if (state === 'compacted') {
      setState('expanded');
    }
  };
  const mouseLeave = () => {
    if (state === 'expanded' && ifWidthInBreakpoint(props.compactedBreakpoints)) {
      setState('compacted');
    }
  };

  React.useEffect(() => {
    const onMediaQueryChanges = () => {
      if (ifWidthInBreakpoint(props.hiddenBreakpoints)) {
        setState('hidden');
        setFixed(true);
      } else if (ifWidthInBreakpoint(props.compactedBreakpoints)) {
        setState('compacted');
        setFixed(true);
      } else {
        setState('expanded');
        setFixed(false);
      }
    };
    if (props.responsive) {
      onMediaQueryChanges();
      window.addEventListener('resize', onMediaQueryChanges);
    }
    return () => {
      window.removeEventListener('resize', onMediaQueryChanges);
    };
  }, []);

  React.useEffect(() => {
    typeof props.getState === 'function' && props.getState(state);
  }, [state]);

  const className = props.className ? props.className.split(' ') : [];
  className.push(state ?? '', props.property ?? '');
  fixed && className.push('fixed');

  return (
    <SidebarStyle
      className={className.join(' ')}
      state={state}
      property={props.property}
      fixed={fixed}
      containerFixed={props.containerFixed}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="main-container">{props.children}</div>
    </SidebarStyle>
  );
});

const SidebarBody: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="scrollable">{props.children}</div>;
};

Sidebar.displayName = 'Sidebar';

Sidebar.defaultProps = {
  compactedBreakpoints: ['xs', 'is', 'sm', 'md', 'lg'],
  hiddenBreakpoints: ['xs', 'is'],
  property: 'start',
  state: 'expanded',
};

export { Sidebar, SidebarBody };
