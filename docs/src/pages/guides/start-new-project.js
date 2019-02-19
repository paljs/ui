import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/start-new-project.mdx';
import SEO from '../../components/SEO';

function StartNewProject() {
  return (
    <Row>
      <SEO
        title="Start new project"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <MdxContent />
      </Col>
    </Row>
  );
}

export default StartNewProject;
