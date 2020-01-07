import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { breakpointDown, Actions, Select, LayoutHeader } from 'oah-ui';

const SidebarIcon = styled(Actions)`
  display: none;
  div {
    height: auto;
  }
  ${breakpointDown('md')`
    display: flex;
  `}
`;

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    width: 100%;
  }
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
`;
interface HeaderProps {
  toggleSidebar: () => void;
  changeTheme: (value: DefaultTheme['name']) => void;
}

const Header: React.FC<HeaderProps> = props => {
  const themeOptions = [
    {
      value: 'default',
      label: 'Default',
    },
    {
      value: 'dark',
      label: 'Dark',
    },
    {
      value: 'cosmic',
      label: 'Cosmic',
    },
    {
      value: 'corporate',
      label: 'Corporate',
      selected: true,
    },
  ];
  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <div className="left">
          <SidebarIcon
            size="Medium"
            actions={[
              {
                icon: 'menu',
                url: {
                  onClick: props.toggleSidebar,
                },
              },
            ]}
          />
          <Actions
            size="Medium"
            actions={[
              {
                content: <h3 style={{ margin: 0 }}>OAH UI</h3>,
              },
              {
                content: (
                  <Select
                    size="Tiny"
                    customLabel="Themes"
                    options={themeOptions}
                    onChange={(v: DefaultTheme['name']) => props.changeTheme(v)}
                  />
                ),
              },
            ]}
          />
        </div>
        <Actions
          size="Small"
          className="right"
          actions={[
            {
              icon: 'github',
              url: { href: 'https://github.com/AhmedElywa/oah-ui', target: '_blank' },
            },
            {
              icon: 'twitter',
              url: { href: 'https://twitter.com/AhmedElywh', target: '_blank' },
            },
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};

export default Header;
