import React from 'react';
import { Layout, LayoutColumns, LayoutColumn, LayoutContainer, LayoutContent, Sidebar, SidebarBody } from '../../../../src';
import styled from 'styled-components';
const SimpleStyle = styled.div`
  height: 50vh;
  overflow: hidden;
  .first {
    background-color: #edeef7;
  }
`;
export default function Basic() {
  return (
    <SimpleStyle>
      <Layout>
        <LayoutContainer>
          <Sidebar>
            <header>Sidebar header</header>
            <SidebarBody>Sidebar Body</SidebarBody>
          </Sidebar>
          <LayoutContent>
            <LayoutColumns>
              <LayoutColumn className="first">Layout Content</LayoutColumn>
            </LayoutColumns>
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    </SimpleStyle>
  );
}
