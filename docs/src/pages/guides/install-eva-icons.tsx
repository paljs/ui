import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/install-eva-icons.md';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function InstallEvaIcons() {
  return (
    <Row>
      <SEO title="Install Eva Icons" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default InstallEvaIcons;
