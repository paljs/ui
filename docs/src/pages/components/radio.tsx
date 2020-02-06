import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/radio/overview.md';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { radioProps, optionProps } from '../../mdx/radio/ApiArray';

export default function RadioPage() {
  return (
    <Row>
      <SEO title="Radio Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Radio Component">
          <Overview />
          <>
            <ApiTable name="Radio" props={radioProps} />
            <ApiTable name="Option" props={optionProps} />
          </>
          <StyleTable keys={['radio']} />
        </Switch>
      </Col>
    </Row>
  );
}
