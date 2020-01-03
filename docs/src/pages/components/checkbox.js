import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/checkbox/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { checkboxProps } from '../../mdx/checkbox/ApiArray';

export default function CheckboxPage() {
  return (
    <Row>
      <SEO title="Checkbox Component" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <Switch title="Checkbox Component">
          <Overview />
          <ApiTable name="Checkbox" props={checkboxProps} />
          <StyleTable keys={['checkbox']} />
        </Switch>
      </Col>
    </Row>
  );
}
