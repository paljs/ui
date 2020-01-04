import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/input/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { inputProps } from '../../mdx/input/ApiArray';

export default function InputPage() {
  return (
    <Row>
      <SEO title="Input Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Input Component">
          <Overview />
          <ApiTable name="InputGroup" props={inputProps} />
          <StyleTable keys={['form']} />
        </Switch>
      </Col>
    </Row>
  );
}
