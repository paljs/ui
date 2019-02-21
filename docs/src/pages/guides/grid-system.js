import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/grid-system.mdx';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function GridSystem() {
  return (
    <Row>
      <SEO title="Grid System" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default GridSystem;
