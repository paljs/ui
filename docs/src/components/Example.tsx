import React from 'react';
import { Row, Tabs, Tab, Col } from 'oah-ui';
import styled, { css } from 'styled-components';

const Style = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.cardBorderColor};
    border-radius: ${theme.cardBorderRadius};
    background-color: ${theme.layoutBackgroundColor};
    .gatsby-highlight {
      border-bottom-left-radius: ${theme.cardBorderRadius};
      border-bottom-right-radius: ${theme.cardBorderRadius};
      margin: -1.25rem !important;
    }
  `}
`;

const Example: React.FC<{ code: string }> = ({ code, children }) => {
  return (
    <Row>
      <Col breakPoint={{ xs: 12 }}>
        <Style>
          <Tabs>
            <Tab title="preview">{children}</Tab>
            <Tab title="code">{code}</Tab>
          </Tabs>
        </Style>
      </Col>
    </Row>
  );
};

export default Example;
