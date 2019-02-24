import React from 'react';
import { Row, Col, Card, CardBody, Spinner } from 'oah-ui';

function Status() {
  return (
    <Row>
      {[
        'Info',
        'Success',
        'Danger',
        'Primary',
        'Warning',
        'Disabled',
        'Active'
      ].map(key => (
        <Col key={key} xs={12}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner status={key}>Loading...</Spinner>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Status;
