import { Container, Row, Col } from 'oah-ui';
import React from 'react';
import Box from './Box';

export default function Auto() {
  return (
    <Container>
      <Row>
        <Col xs>
          <Box row>xs</Box>
        </Col>
        <Col xs>
          <Box row>xs</Box>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Box row>xs</Box>
        </Col>
        <Col xs>
          <Box row>xs</Box>
        </Col>
        <Col xs>
          <Box row>xs</Box>
        </Col>
      </Row>
    </Container>
  );
}
