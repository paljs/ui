import React from 'react';
import { Card, CardBody, EvaIcon, Col, Row } from 'oah-ui';

export default function () {
  return (
    <Card>
      <header>Animation</header>
      <CardBody>
        <Row>
          {(['zoom', 'pulse', 'shake', 'flip'] as ('zoom' | 'pulse' | 'shake' | 'flip')[]).map((key) => (
            <Col key={key} breakPoint={{ xs: true }}>
              <EvaIcon status="Success" name="heart-outline" options={{ animation: { type: key } }} /> {key}
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
}
