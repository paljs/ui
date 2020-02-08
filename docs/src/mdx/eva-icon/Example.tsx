import React from 'react';
import { Card, CardBody, EvaIcon, Col, Row } from 'oah-ui';
import { status } from '../shared';

export default function() {
  return (
    <Card>
      <header>Icon status</header>
      <CardBody>
        <Row>
          {status.map(key => (
            <Col key={key} breakPoint={{ xs: true }}>
              <EvaIcon status={key} name="heart-outline" />
            </Col>
          ))}
          <Col breakPoint={{ xs: true }}>
            <EvaIcon name="heart-outline" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
