import { Container, Row, Col } from 'oah-ui';
import React from 'react';
import Box from './Box';

export default function Alignment() {
  return (
    <Container>
      <h3>
        <code>.start-</code>
      </h3>
      <Row>
        <Col xs={12}>
          <Box container>
            <Row start="xs">
              <Col xs={6}>
                <Box nested>start="xs"</Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <h3>
        <code>.center-</code>
      </h3>
      <Row>
        <Col xs={12}>
          <Box container>
            <Row center="xs">
              <Col xs={6}>
                <Box nested>center="xs"</Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <h3>
        <code>.end-</code>
      </h3>
      <Row>
        <Col xs={12}>
          <Box container>
            <Row end="xs">
              <Col xs={6}>
                <Box nested>end="xs"</Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <h3>
        <code>.top-</code>
      </h3>
      <Row top="xs">
        <Col xs={6}>
          <Box large>top="xs"</Box>
        </Col>
        <Col xs={6}>
          <Box>top="xs"</Box>
        </Col>
      </Row>
      <h3>
        <code>.middle-</code>
      </h3>
      <Row middle="xs">
        <Col xs={6}>
          <Box large>middle="xs"</Box>
        </Col>
        <Col xs={6}>
          <Box>middle="xs"</Box>
        </Col>
      </Row>
      <h3>
        <code>.bottom-</code>
      </h3>
      <Row bottom="xs">
        <Col xs={6}>
          <Box large>bottom="xs"</Box>
        </Col>
        <Col xs={6}>
          <Box>bottom="xs"</Box>
        </Col>
      </Row>
    </Container>
  );
}
