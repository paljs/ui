import React from 'react';
import { Row, Col } from '../../../../src';
import Overview from '../../mdx/grid/overview.mdx';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import ApiTable from '../../components/ApiTable';
import { container, row, col } from '../../mdx/grid/ApiArray';

function GridComponents() {
  return (
    <Row>
      <SEO title="Grid Components" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Grid Components">
          <Overview />
          <>
            <ApiTable name="Container" props={container} />
            <ApiTable
              name="Row"
              hint="breakpoints type is one of this [xs, is, sm, md, lg, xl, xxl, xxxl]"
              props={row}
            />
            <ApiTable name="Col" props={col} />
          </>
        </Switch>
      </Col>
    </Row>
  );
}

export default GridComponents;
