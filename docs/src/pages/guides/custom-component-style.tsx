import React from 'react';
import { Row, Col } from '../../../../src';
import MdxContent from '../../mdx/guides/custom-component-style.mdx';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

export default function CustomComponentStyle() {
  return (
    <Row>
      <SEO title="Custom Component Style" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}