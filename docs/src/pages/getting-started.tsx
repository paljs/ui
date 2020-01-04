import React from 'react';
import { Row, Col } from 'oah-ui';
import GettingStarted from '../mdx/getting-started.mdx';
import SEO from '../components/SEO';
import GuideStyle from '../components/GuideStyle';

function GettingStartedPage() {
  return (
    <Row>
      <SEO title="Getting Started" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <GettingStarted />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default GettingStartedPage;
