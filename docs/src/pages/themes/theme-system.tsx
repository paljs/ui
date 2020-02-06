import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/themes/theme-system.md';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function ThemeSystem() {
  return (
    <Row>
      <SEO title="Theme System" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default ThemeSystem;
