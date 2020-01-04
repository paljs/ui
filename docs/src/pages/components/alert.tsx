import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/alert/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { alertProps } from '../../mdx/alert/ApiArray';

export default function AlertPage() {
  return (
    <Row>
      <SEO title="Alert Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Alert Component">
          <Overview />
          <ApiTable name="Alert" props={alertProps} />
          <StyleTable keys={['alert']} />
        </Switch>
      </Col>
    </Row>
  );
}
