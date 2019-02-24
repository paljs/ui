import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/search/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { searchProps } from '../../mdx/search/ApiArray';

export default function SearchPage() {
  return (
    <Row>
      <SEO
        title="Search Component"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <Switch title="Search Component">
          <Overview />
          <ApiTable name="Search" props={searchProps} />
          <StyleTable keys={['search']} />
        </Switch>
      </Col>
    </Row>
  );
}
