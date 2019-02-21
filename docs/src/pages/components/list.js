import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/list/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';

export default function ListPage() {
  return (
    <Row>
      <SEO title="List Components" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <Switch title="List Components">
          <Overview />
          <ApiTable
            name="List"
            props={[]}
            hint="This component just styled component not have any React function so you can pass any props like styled component"
          />
          <StyleTable keys={['list']} />
        </Switch>
      </Col>
    </Row>
  );
}
