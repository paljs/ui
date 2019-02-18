import React, { useState, useRef, Fragment } from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { themes } from 'oah-ui/theme';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  GlobalStyle,
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
  const [dir, setDir] = useState('ltr');
  const sidebarRef = useRef();
  const menuRef = useRef();

  const changeTheme = newTheme => {
    setTheme(newTheme);
  };
  const changeDir = () => {
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(newDir);
  };
  return (
    <ThemeProvider
      theme={{
        ...themes(theme, {
          sidebarHeaderGap: '2rem',
          sidebarWidth: '21rem',
          fontMain:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
        }),
        dir,
        theme
      }}
    >
      <Fragment>
        <SimpleLayout globalStyle={GlobalStyle} />
        <Layout dir={dir}>
          <LayoutHeader fixed>
            <Header
              changeTheme={theme => changeTheme(theme)}
              changeDir={changeDir}
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
              {theme !== 'corporate' && (
                <header>
                  <ButtonLink
                    href="https://github.com/oahtech/oah-ui"
                    target="_blank"
                    className="main-btn"
                    hero
                    shape="Rectangle"
                    status="Success"
                  >
                    <i className="icon ion-logo-github" />
                    <span>Support Us</span>
                  </ButtonLink>
                </header>
              )}
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
              <LayoutColumns>{props.children}</LayoutColumns>
              <LayoutFooter>Footer</LayoutFooter>
            </LayoutContent>
          </LayoutContainer>
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}
