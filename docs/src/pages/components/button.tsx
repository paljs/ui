import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/button/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { buttonProps } from '../../mdx/button/ApiArray';

export default function ButtonPage() {
  return (
    <Row>
      <SEO title="Button Components" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Button Components">
          <Overview />
          <ApiTable
            name="Button"
            props={buttonProps}
            hint="This component just styled component not have any React function so you can pass any props like styled component"
          />
          <StyleTable keys={['btn']} />
        </Switch>
      </Col>
    </Row>
  );
}
