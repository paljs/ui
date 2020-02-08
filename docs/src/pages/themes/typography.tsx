import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/themes/typography.md';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

export default function Typography() {
  return (
    <Row>
      <SEO title="Typography" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}
