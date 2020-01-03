import { Container, Row, Col } from '../../../../src';
import React from 'react';
import Box from './Box';

export default function Hide() {
  return (
    <Container>
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Box row />
        </Col>
        <Col breakPoint={{ xs: false, md: 6 }}>
          <Box row>xs=false</Box>
        </Col>
      </Row>
    </Container>
  );
}
