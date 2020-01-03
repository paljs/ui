import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/context-menu/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { contextProps } from '../../mdx/context-menu/ApiArray';
import { itemProps } from '../../mdx/menu/ApiArray';

export default function ContextMenuPage() {
  return (
    <Row>
      <SEO title="ContextMenu Component" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <Switch title="ContextMenu Component">
          <Overview />
          <>
            <ApiTable
              name="ContextMenu"
              props={contextProps}
              hint="items prop take array of object item go down to see his props ↓"
            />
            <ApiTable name="Item" props={itemProps} />
          </>
          <StyleTable keys={['context']} />
        </Switch>
      </Col>
    </Row>
  );
}
