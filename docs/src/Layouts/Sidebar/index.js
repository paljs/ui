import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from 'react';
import { Menu, SidebarBody, Button } from 'oah-ui';
import menuItems from '../menuItem';
import { Link } from 'gatsby';
import Sidebar from './style';

const SidebarCustom = forwardRef((props, ref) => {
  const [menuState, setMenuState] = useState(false);
  const sidebarRef = useRef();
  const menuRef = useRef();

  useImperativeHandle(ref, () => ({
    toggle() {
      sidebarRef.current.toggle();
    }
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
          size="XS"
          status="Primary"
          onClick={() => {
            setMenuState(!menuState);
            menuRef.current.toggle();
          }}
          fullWidth
        >
          {menuState ? (
            <i className="icon ion-ios-arrow-dropup" />
          ) : (
            <i className="icon ion-ios-arrow-dropdown" />
          )}
        </Button>
      </header>

      <SidebarBody>
        <Menu
          className="sidebar-menu"
          Link={Link}
          ref={menuRef}
          items={menuItems}
          toggleSidebar={() => sidebarRef.current.hide()}
        />
      </SidebarBody>
    </Sidebar>
  );
});

export default SidebarCustom;
