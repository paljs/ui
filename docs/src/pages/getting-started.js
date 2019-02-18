import React from 'react';
import { Row, Col } from 'oah-ui';
import GettingStarted from '../mdx/getting-started.mdx';
import SEO from '../components/SEO';

function GettingStartedPage() {
  return (
    <Row>
      <SEO title="Getting Started" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <GettingStarted />
      </Col>
    </Row>
  );
}

export default GettingStartedPage;
