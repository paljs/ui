import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/reveal-card/overview.mdx';
import ApiTable from '../../components/ApiTable';
import { revealCardProps } from '../../mdx/reveal-card/ApiArray';

export default function RevealCardPage() {
  return (
    <Row>
      <SEO title="RevealCard Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="RevealCard Components">
          <Overview />
          <ApiTable name="RevealCard" props={revealCardProps} />
        </Switch>
      </Col>
    </Row>
  );
}
