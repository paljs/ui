import { Container, Row, Col } from '../../../../src';
import React from 'react';
import Box from './Box';

export default function Distribution() {
  return (
    <Container>
      <h3>
        <code>.around-</code>
      </h3>
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Box container>
            <Row around="xs">
              <Col breakPoint={{ xs: 2 }}>
                <Box nested />
              </Col>
              <Col breakPoint={{ xs: 2 }}>
                <Box nested />
              </Col>
              <Col breakPoint={{ xs: 2 }}>
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
        <Col breakPoint={{ xs: 12 }}>
          <Box container>
            <Row between="xs">
              <Col breakPoint={{ xs: 2 }}>
                <Box nested />
              </Col>
              <Col breakPoint={{ xs: 2 }}>
                <Box nested />
              </Col>
              <Col breakPoint={{ xs: 2 }}>
                <Box nested />
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
