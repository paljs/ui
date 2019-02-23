import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/toastr/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { toastrProps, toastrMethod } from '../../mdx/toastr/ApiArray';
//import { toastrProps } from '../../mdx/toastr/ApiArray';

export default function ToastrPage() {
  return (
    <Row>
      <SEO
        title="Toastr Component"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <Switch title="Toastr Component">
          <Overview />
          <ApiTable name="Toastr" props={toastrProps} methods={toastrMethod} />
          <StyleTable keys={['toastr']} />
        </Switch>
      </Col>
    </Row>
  );
}
