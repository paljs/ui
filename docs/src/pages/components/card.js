import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/card/overview.mdx';
import StyleTable from '../../components/StyleTable';
import ApiTable from '../../components/ApiTable';
import { cardProps } from '../../mdx/card/ApiArray';

function CardPage() {
  return (
    <Row>
      <SEO title="Card Components" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <Switch title="Card Component">
          <Overview />
          <ApiTable
            hint="This component just styled component not have any React function so you can pass any props like styled component"
            name="Card"
            props={cardProps}
          />
          <StyleTable keys={['card']} />
        </Switch>
      </Col>
    </Row>
  );
}

export default CardPage;
