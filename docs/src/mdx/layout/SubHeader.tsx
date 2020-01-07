import React, { useRef } from 'react';
import {
  Layout,
  LayoutHeader,
  LayoutColumns,
  LayoutColumn,
  LayoutContainer,
  LayoutContent,
  Sidebar,
  Actions,
  SidebarRefObject,
} from 'oah-ui';
import styled from 'styled-components';
const SimpleStyle = styled.div`
  height: 50vh;
  overflow: hidden;
  .first {
    background-color: #edeef7;
  }
  .second {
    background-color: #f4f4f7;
  }
  .height {
    max-height: calc(50vh - 4.75rem);
  }
`;
export default function Column() {
  const sidebarRef = useRef<SidebarRefObject>(null);
  return (
    <SimpleStyle>
      <Layout withSubHeader>
        <LayoutHeader>
          <Actions
            size="Medium"
            actions={[
              {
                icon: 'menu',
                link: {
                  onClick() {
                    sidebarRef.current?.toggle();
                  },
                },
              },
            ]}
          />
        </LayoutHeader>
        <LayoutContainer>
          <Sidebar ref={sidebarRef} />
          <LayoutContent className="height">
            <LayoutHeader>
              <Actions
                size="Small"
                actions={[
                  {
                    icon: 'droplet',
                  },
                  {
                    icon: 'eye',
                  },
                  {
                    icon: 'settings',
                  },
                ]}
              />
            </LayoutHeader>
            <LayoutColumns>
              <LayoutColumn className="first">Layout Content</LayoutColumn>
            </LayoutColumns>
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    </SimpleStyle>
  );
}
