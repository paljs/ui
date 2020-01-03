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
} from '../../../../src';
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
  const sidebarRef = useRef();
  return (
    <SimpleStyle>
      <Layout withSubHeader>
        <LayoutHeader>
          <Actions
            size="MD"
            actions={[
              {
                icon: 'icon ion-ios-menu',
                events: {
                  onClick() {
                    sidebarRef.current.toggle();
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
                size="SM"
                actions={[
                  {
                    icon: 'icon ion-ios-water',
                  },
                  {
                    icon: 'icon ion-ios-eye',
                  },
                  {
                    icon: 'icon ion-ios-settings',
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
