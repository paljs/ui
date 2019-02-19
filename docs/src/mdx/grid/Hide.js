import { Container, Row, Col } from 'oah-ui';
import React from 'react';
import Box from './Box';

export default function Hide() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Box row />
        </Col>
        <Col xs={false} md={6}>
          <Box row>xs=false</Box>
        </Col>
      </Row>
    </Container>
  );
}
