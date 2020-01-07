import React, { useState, useRef, Fragment } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import icons from 'oah-eva-icon';
import themes from './themes';
import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutColumn,
  SidebarRefObject,
} from 'oah-ui';

import Header from './Header';
import SimpleLayout from './SimpleLayout';
import SidebarCustom from './Sidebar';

const LayoutPage: React.FC = props => {
  const [theme, setTheme] = useState<DefaultTheme['name']>('default');
  const sidebarRef = useRef<SidebarRefObject>(null);
  const changeTheme = (newTheme: DefaultTheme['name']) => {
    setTheme(newTheme);
  };
  return (
    <ThemeProvider theme={themes(theme)}>
      <Fragment>
        <SimpleLayout />
        <Layout windowMode evaIcons={icons}>
          <Header changeTheme={changeTheme} toggleSidebar={() => sidebarRef.current?.toggle()} />
          <LayoutContainer>
            <SidebarCustom ref={sidebarRef} />
            <LayoutContent>
              <LayoutColumns>
                <LayoutColumn className="main-content">{props.children}</LayoutColumn>
              </LayoutColumns>
              <LayoutFooter>Footer</LayoutFooter>
            </LayoutContent>
          </LayoutContainer>
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
};

export default LayoutPage;
