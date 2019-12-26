/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import PropTypes from 'prop-types';
import SidebarStyle from './style';
import { ifWidthInBreakpoint } from '../../theme';

let Sidebar = (props, ref) => {
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

  const className = props.className ? props.className.split(' ') : [];
  className.push(state, props.property);
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
};

function SidebarBody(props) {
  return <div className="scrollable">{props.children}</div>;
}

Sidebar = React.forwardRef(Sidebar);

Sidebar.defaultProps = {
  compactedBreakpoints: ['xs', 'is', 'sm', 'md', 'lg'],
  hiddenBreakpoints: ['xs', 'is'],
  property: 'start',
  state: 'expanded',
};

Sidebar.propTypes = {
  state: PropTypes.oneOf(['hidden', 'visible', 'compacted', 'expanded']),
  property: PropTypes.oneOf(['right', 'left', 'start', 'end']),
  compactedBreakpoints: PropTypes.arrayOf(PropTypes.string),
  hiddenBreakpoints: PropTypes.arrayOf(PropTypes.string),
  fixed: PropTypes.bool,
  containerFixed: PropTypes.bool,
  responsive: PropTypes.bool,
};

export { Sidebar, SidebarBody };
