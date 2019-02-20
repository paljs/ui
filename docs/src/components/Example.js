import React from 'react';
import { Row, Col, Tabs, Tab } from 'oah-ui';
import styled, { css } from 'styled-components';

const Style = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.separator};
    border-radius: ${theme.radius};
    background-color: ${theme.layoutBg};
    .gatsby-highlight {
      border-radius: 0;
      border-bottom-left-radius: ${theme.radius};
      border-bottom-right-radius: ${theme.radius};
      margin: -1.25rem !important;
    }
  `}
`;

function Example({ code, children }) {
  return (
    <Row>
      <Col xs={12}>
        <Style>
          <Tabs>
            <Tab title="preview">{children}</Tab>
            <Tab title="code">{code}</Tab>
          </Tabs>
        </Style>
      </Col>
    </Row>
  );
}

export default Example;
