import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/progress/overview.md';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { progressProps } from '../../mdx/progress/ApiArray';

export default function ProgressPage() {
  return (
    <Row>
      <SEO title="Progress Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Progress Component">
          <Overview />
          <ApiTable name="Progress" props={progressProps} />
          <StyleTable keys={['progressBar']} />
        </Switch>
      </Col>
    </Row>
  );
}
