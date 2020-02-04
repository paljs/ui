import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/start-new-gatsby-project.mdx';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function StartNewGatsbyProject() {
  return (
    <Row>
      <SEO title="Start new project" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default StartNewGatsbyProject;
