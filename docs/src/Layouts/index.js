import React, { useState, useRef, Fragment } from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutColumn,
  ButtonLink,
  Sidebar,
  SidebarBody,
  Menu
} from 'oah-ui';
import menuItems from './menuItem';
import Header from './Header';
import SimpleLayout from './SimpleLayout';

export default function LayoutPage(props) {
  const [theme, setTheme] = useState('default');
  const sidebarRef = useRef();
  const menuRef = useRef();

  const changeTheme = newTheme => {
    setTheme(newTheme);
  };
  return (
    <ThemeProvider theme={themes(theme)}>
      <Fragment>
        <SimpleLayout />
        <Layout windowMode>
          <LayoutHeader fixed>
            <Header
              changeTheme={theme => changeTheme(theme)}
              toggleSidebar={() => sidebarRef.current.toggle()}
              collapseAll={() => menuRef.current.collapseAll()}
              expandAll={() => menuRef.current.expandAll()}
            />
          </LayoutHeader>
          <LayoutContainer>
            <Sidebar
              ref={sidebarRef}
              property="start"
              containerFixed
              responsive
              className="menu-sidebar"
              compactedBreakpoints={[]}
              collapsedBreakpoints={['xs', 'is', 'sm', 'md']}
            >
              <header>
                <ButtonLink
                  href="https://github.com/oahtech/oah-ui"
                  target="_blank"
                  className="main-btn"
                  shape="Rectangle"
                  hero
                  size="XS"
                  status="Success"
                >
                  <i className="icon ion-logo-github" />
                  <span>Support Us</span>
                </ButtonLink>
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
            <LayoutContent>
              <LayoutColumns>
                <LayoutColumn>{props.children}</LayoutColumn>
              </LayoutColumns>
              <LayoutFooter>Footer</LayoutFooter>
            </LayoutContent>
          </LayoutContainer>
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}
