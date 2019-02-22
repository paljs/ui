import React, { useState, useRef, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutColumn
} from 'oah-ui';

import Header from './Header';
import SimpleLayout from './SimpleLayout';
import SidebarCustom from './Sidebar';

export default function LayoutPage(props) {
  const [theme, setTheme] = useState('corporate');
  const sidebarRef = useRef();

  const changeTheme = newTheme => {
    setTheme(newTheme);
  };
  return (
    <ThemeProvider theme={themes(theme)}>
      <Fragment>
        <SimpleLayout />
        <Layout windowMode>
          <Header
            changeTheme={changeTheme}
            toggleSidebar={() => sidebarRef.current.toggle()}
          />
          <LayoutContainer>
            <SidebarCustom ref={sidebarRef} />
            <LayoutContent>
              <LayoutColumns>
                <LayoutColumn className="main-content">
                  {props.children}
                </LayoutColumn>
              </LayoutColumns>
              <LayoutFooter>Footer</LayoutFooter>
            </LayoutContent>
          </LayoutContainer>
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}
