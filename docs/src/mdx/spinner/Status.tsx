import React from 'react';
import { Row, Col, Card, CardBody, Spinner } from 'oah-ui';
import { status } from '../shared';

function Status() {
  return (
    <Row>
      {status.map(key => (
        <Col key={key} breakPoint={{ xs: 12 }}>
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
