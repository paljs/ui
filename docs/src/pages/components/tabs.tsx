import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/tabs/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { tabsProps, tabProps } from '../../mdx/tabs/ApiArray';

export default function TabsPage() {
  return (
    <Row>
      <SEO title="Tabs Components" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Tabs Components">
          <Overview />
          <>
            <ApiTable name="Tabs" props={tabsProps} />
            <ApiTable name="Tab" props={tabProps} />
          </>
          <StyleTable keys={['tabs']} />
        </Switch>
      </Col>
    </Row>
  );
}
