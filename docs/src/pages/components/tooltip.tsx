import React from 'react';
import { Row, Col } from '../../../../src';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/tooltip/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { tooltipProps } from '../../mdx/tooltip/ApiArray';

export default function TooltipPage() {
  return (
    <Row>
      <SEO title="Tooltip Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Tooltip Component">
          <Overview />
          <ApiTable name="Tooltip" props={tooltipProps} />
          <StyleTable keys={['tooltip']} />
        </Switch>
      </Col>
    </Row>
  );
}
