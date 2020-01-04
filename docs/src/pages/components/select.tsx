import React from 'react';
import { Row, Col } from '../../../../src';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/select/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { selectProps } from '../../mdx/select/ApiArray';

export default function SelectPage() {
  return (
    <Row>
      <SEO title="Select Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Select Component">
          <Overview />
          <ApiTable name="Select" props={selectProps} />
          <StyleTable keys={['select']} />
        </Switch>
      </Col>
    </Row>
  );
}
