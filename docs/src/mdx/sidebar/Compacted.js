import React from 'react';
import {
  Layout,
  LayoutColumns,
  LayoutColumn,
  LayoutContainer,
  LayoutContent,
  Sidebar
} from 'oah-ui';
import styled from 'styled-components';
const SimpleStyle = styled.div`
  height: 50vh;
  overflow: hidden;
  .first {
    background-color: #edeef7;
  }
`;
export default function Compacted() {
  return (
    <SimpleStyle>
      <Layout>
        <LayoutContainer>
          <Sidebar state="compacted" />
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
