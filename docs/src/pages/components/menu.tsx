import React from 'react';
import { Row, Col } from '../../../../src';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/menu/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { menuProps, menuMethod, itemProps } from '../../mdx/menu/ApiArray';

export default function MenuPage() {
  return (
    <Row>
      <SEO title="Menu Components" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Menu Components">
          <Overview />
          <>
            <ApiTable
              name="Menu"
              props={menuProps}
              methods={menuMethod}
              hint="items prop take array of object item go down to see his props ↓"
            />
            <ApiTable name="Item" props={itemProps} />
          </>
          <StyleTable keys={['menu']} />
        </Switch>
      </Col>
    </Row>
  );
}
