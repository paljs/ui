import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/install-based-on-starter-kit.mdx';
import SEO from '../../components/SEO';

function InstallBasedKit() {
  return (
    <Row>
      <SEO
        title="Install Based on Starter Kit"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <MdxContent />
      </Col>
    </Row>
  );
}

export default InstallBasedKit;
