import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { breakpointDown, Actions, Select, LayoutHeader, EvaIcon } from 'oah-ui';

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

const SelectStyled = styled(Select)`
  min-width: 150px;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
`;
const Header: React.FC<HeaderProps> = props => {
  const themeOptions = [
    {
      value: 'default',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#a6c1ff' }} />
          Default
        </Label>
      ),
    },
    {
      value: 'dark',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#192038' }} />
          Dark
        </Label>
      ),
    },
    {
      value: 'cosmic',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#5a37b8' }} />
          Cosmic
        </Label>
      ),
    },
    {
      value: 'corporate',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#3366ff' }} />
          Corporate
        </Label>
      ),
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
                  <SelectStyled
                    isSearchable={false}
                    shape="SemiRound"
                    placeholder="Themes"
                    options={themeOptions}
                    onChange={({ value }: { value: DefaultTheme['name'] }) => props.changeTheme(value)}
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
