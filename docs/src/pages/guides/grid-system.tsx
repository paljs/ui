import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/grid-system.md';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function GridSystem() {
  return (
    <Row>
      <SEO title="Grid System" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default GridSystem;
