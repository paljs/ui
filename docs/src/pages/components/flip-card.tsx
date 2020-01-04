import React from 'react';
import { Row, Col } from '../../../../src';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/flip-card/overview.mdx';
import ApiTable from '../../components/ApiTable';
import { flipCardProps } from '../../mdx/flip-card/ApiArray';

export default function FlipCardPage() {
  return (
    <Row>
      <SEO title="FlipCard Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="FlipCard Components">
          <Overview />
          <ApiTable name="FlipCard" props={flipCardProps} />
        </Switch>
      </Col>
    </Row>
  );
}
