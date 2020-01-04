import React from 'react';
import { Row, Col } from '../../../../src';
import MdxContent from '../../mdx/guides/enable-theme-system.mdx';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function EnableThemeSystem() {
  return (
    <Row>
      <SEO title="Enable Theme System" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default EnableThemeSystem;
