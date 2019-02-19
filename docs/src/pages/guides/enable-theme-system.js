import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/enable-theme-system.mdx';
import SEO from '../../components/SEO';

function EnableThemeSystem() {
  return (
    <Row>
      <SEO
        title="Enable Theme System"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <MdxContent />
      </Col>
    </Row>
  );
}

export default EnableThemeSystem;
