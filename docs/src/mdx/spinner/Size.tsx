import React from 'react';
import { Row, Col, Card, CardBody, Spinner } from '../../../../src';
import { size } from '../shared';

function Size() {
  return (
    <Row>
      {size.map(key => (
        <Col key={key} breakPoint={{ xs: 12 }}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner size={key}>Loading...</Spinner>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Size;
