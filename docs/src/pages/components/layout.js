import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/layout/overview.mdx';
import StyleTable from '../../components/StyleTable';
import ApiTable from '../../components/ApiTable';
import {
  layoutProps,
  layoutMethod,
  headerProps,
  columnProps
} from '../../mdx/layout/ApiArray';

function LayoutPage() {
  return (
    <Row>
      <SEO
        title="Layout Components"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <Switch title="Layout Components">
          <Overview />
          <>
            <ApiTable
              name="Layout"
              props={layoutProps}
              methods={layoutMethod}
            />
            <ApiTable name="Header" props={headerProps} />
            <ApiTable name="column" props={columnProps} />
          </>
          <StyleTable keys={['layout', 'header', 'footer']} />
        </Switch>
      </Col>
    </Row>
  );
}

export default LayoutPage;
