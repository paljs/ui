import React from 'react';
import { Row, Col } from 'oah-ui';
import Overview from '../../mdx/grid/overview.mdx';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import StyleTable from '../../components/StyleTable';

function GridComponents() {
  return (
    <Row>
      <SEO title="Grid Components" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <Switch title="Grid Components">
          <Overview />
          <StyleTable keys={['header', 'sidebar']} />
        </Switch>
      </Col>
    </Row>
  );
}

export default GridComponents;
