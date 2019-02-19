import { Container, Row, Col } from 'oah-ui';
import React from 'react';
import Box from './Box';

export default function Distribution() {
  return (
    <Container>
      <h3>
        <code>.around-</code>
      </h3>
      <Row>
        <Col xs={12}>
          <Box container>
            <Row around="xs">
              <Col xs={2}>
                <Box nested />
              </Col>
              <Col xs={2}>
                <Box nested />
              </Col>
              <Col xs={2}>
                <Box nested />
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <h3>
        <code>.between-</code>
      </h3>
      <Row>
        <Col xs={12}>
          <Box container>
            <Row between="xs">
              <Col xs={2}>
                <Box nested />
              </Col>
              <Col xs={2}>
                <Box nested />
              </Col>
              <Col xs={2}>
                <Box nested />
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
