import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/actions/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { actionsProps, actionProps } from '../../mdx/actions/ApiArray';

export default function ActionsPage() {
  return (
    <Row>
      <SEO
        title="Actions Components"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <Switch title="Actions Components">
          <Overview />
          <>
            <ApiTable
              name="Actions"
              props={actionsProps}
              hint="actions array accept object of action see down"
            />
            <ApiTable name="Action" props={actionProps} hint="this not component just object pass to actions props array" />
          </>
          <StyleTable keys={['actions']} />
        </Switch>
      </Col>
    </Row>
  );
}
