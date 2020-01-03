import React from 'react';
import { Row, Col, Card, CardBody, Spinner } from '../../../../src';

function Size() {
  return (
    <Row>
      {['XXS', 'XS', 'SM', 'MD', 'LG', 'XL', 'XXL'].map(key => (
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
