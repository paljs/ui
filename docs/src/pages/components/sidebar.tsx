import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/sidebar/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { sidebarProps, sidebarMethod } from '../../mdx/sidebar/ApiArray';

export default function SidebarPage() {
  return (
    <Row>
      <SEO title="Sidebar Components" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Sidebar Components">
          <Overview />
          <ApiTable name="Sidebar" props={sidebarProps} methods={sidebarMethod} />
          <StyleTable keys={['sidebar']} />
        </Switch>
      </Col>
    </Row>
  );
}
