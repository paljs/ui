import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/user/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { userProps } from '../../mdx/user/ApiArray';

export default function UserPage() {
  return (
    <Row>
      <SEO title="User Component" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <Switch title="User Component">
          <Overview />
          <ApiTable name="User" props={userProps} />
          <StyleTable keys={['user']} />
        </Switch>
      </Col>
    </Row>
  );
}
