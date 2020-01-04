import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/badge/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { badgeProps } from '../../mdx/badge/ApiArray';

export default function BadgePage() {
  return (
    <Row>
      <SEO title="Badge Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Badge Component">
          <Overview />
          <ApiTable name="Badge" props={badgeProps} />
          <StyleTable keys={['badge']} />
        </Switch>
      </Col>
    </Row>
  );
}
