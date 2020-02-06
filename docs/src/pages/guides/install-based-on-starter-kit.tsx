import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/install-based-on-starter-kit.md';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function InstallBasedKit() {
  return (
    <Row>
      <SEO title="Install Based on Starter Kit" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default InstallBasedKit;
