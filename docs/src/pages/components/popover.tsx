import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/popover/overview.md';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { popoverProps } from '../../mdx/popover/ApiArray';

export default function PopoverPage() {
  return (
    <Row>
      <SEO title="Popover Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Popover Component">
          <Overview />
          <ApiTable name="Popover" props={popoverProps} />
          <StyleTable keys={['popover']} />
        </Switch>
      </Col>
    </Row>
  );
}
