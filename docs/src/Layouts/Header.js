import React from 'react';
import { Actions, Select, LayoutHeader } from 'oah-ui';
import styled from 'styled-components';
import { breakpointDown } from 'oah-ui/theme';

const SidebarIcon = styled(Actions)`
  display: none;
  ${breakpointDown('md')`
    display: flex;
  `}
`;

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .left {
    display: flex;
    width: 100%;
  }
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
`;

export default function Header(props) {
  const themeOptions = [
    {
      value: 'default',
      label: 'Default'
    },
    {
      value: 'cosmic',
      label: 'Cosmic'
    },
    {
      value: 'corporate',
      label: 'Corporate',
      selected: true
    }
  ];
  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <div className="left">
          <SidebarIcon
            size="MD"
            actions={[
              {
                icon: 'icon ion-ios-menu',
                events: {
                  onClick: props.toggleSidebar
                }
              }
            ]}
          />
          <Actions
            size="MD"
            actions={[
              {
                content: <h3>OAH Admin</h3>
              },
              {
                content: (
                  <Select
                    size="XS"
                    style={{ minWidth: '8rem' }}
                    customLabel="Themes"
                    options={themeOptions}
                    onChange={v => props.changeTheme(v)}
                  />
                )
              }
            ]}
          />
        </div>
        <Actions
          size="SM"
          className="right"
          actions={[
            {
              icon: 'icon ion-logo-github',
              url: 'https://github.com/oahtech/oah-ui',
              target: '_blank'
            },
            {
              icon: 'icon ion-logo-twitter',
              url: 'https://twitter.com/AhmedElywh',
              target: '_blank'
            }
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
}
