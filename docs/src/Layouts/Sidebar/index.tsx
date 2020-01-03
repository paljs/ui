import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Menu, SidebarBody, Button, SidebarRefObject, MenuRefObject, EvaIcon, SidebarProps } from '../../../../src';
import menuItems from '../menuItem';
import { Link } from 'gatsby';
import Sidebar from './style';

const SidebarCustom: React.RefForwardingComponent<Omit<SidebarRefObject, 'hide'>, SidebarProps> = (_, ref) => {
  const [menuState, setMenuState] = useState(false);
  const sidebarRef = useRef<SidebarRefObject>(null);
  const menuRef = useRef<MenuRefObject>(null);

  useImperativeHandle(ref, () => ({
    toggle() {
      sidebarRef.current?.toggle();
    },
  }));

  return (
    <Sidebar
      ref={sidebarRef}
      property="start"
      containerFixed
      responsive
      className="menu-sidebar"
      compactedBreakpoints={[]}
      hiddenBreakpoints={['xs', 'is', 'sm', 'md']}
    >
      <header>
        <Button
          size="Tiny"
          status="Primary"
          onClick={() => {
            setMenuState(!menuState);
            menuRef.current?.toggle();
          }}
          fullWidth
        >
          {menuState ? <EvaIcon name="arrow-circle-up" /> : <EvaIcon name="arrow-circle-down" />}
        </Button>
      </header>
      <SidebarBody>
        <Menu
          className="sidebar-menu"
          Link={Link}
          ref={menuRef}
          items={menuItems}
          toggleSidebar={() => sidebarRef.current?.hide()}
        />
      </SidebarBody>
    </Sidebar>
  );
};

export default forwardRef(SidebarCustom);
