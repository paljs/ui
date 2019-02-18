import React from 'react';
import { Row, Col, Card, Tabs, Tab } from 'oah-ui';

function DemoComponent({ code, children }) {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Tabs fullWidth>
            <Tab title="Live">{children}</Tab>
            <Tab title="Code">
              <pre>{code}</pre>
            </Tab>
          </Tabs>
        </Card>
      </Col>
    </Row>
  );
}

export default DemoComponent;
