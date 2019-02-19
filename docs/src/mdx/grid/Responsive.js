import { Container, Row, Col } from 'oah-ui';
import React from 'react';
import Box from './Box';

export default function Responsive() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Box row />
        </Col>
        <Col xs={6} sm={6} md={8} lg={6}>
          <Box row />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Box row />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Box row />
        </Col>
        <Col xs={12} sm={6} md={8} lg={9}>
          <Box row />
        </Col>
      </Row>
      <Row>
        <Col xs={8} sm={6} md={8} lg={9}>
          <Box row />
        </Col>
        <Col xs={4} sm={6} md={4} lg={3}>
          <Box row />
        </Col>
      </Row>
    </Container>
  );
}
