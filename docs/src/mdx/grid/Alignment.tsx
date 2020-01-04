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
        <Col breakPoint={{ xs: 12 }}>
          <Box container>
            <Row start="xs">
              <Col breakPoint={{ xs: 6 }}>
                <Box nested>start=&quot;xs&quot;</Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <h3>
        <code>.center-</code>
      </h3>
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Box container>
            <Row center="xs">
              <Col breakPoint={{ xs: 6 }}>
                <Box nested>center=&quot;xs&quot;</Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <h3>
        <code>.end-</code>
      </h3>
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Box container>
            <Row end="xs">
              <Col breakPoint={{ xs: 6 }}>
                <Box nested>end=&quot;xs&quot;</Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
      <h3>
        <code>.top-</code>
      </h3>
      <Row top="xs">
        <Col breakPoint={{ xs: 6 }}>
          <Box large>top=&quot;xs&quot;</Box>
        </Col>
        <Col breakPoint={{ xs: 6 }}>
          <Box>top=&quot;xs&quot;</Box>
        </Col>
      </Row>
      <h3>
        <code>.middle-</code>
      </h3>
      <Row middle="xs">
        <Col breakPoint={{ xs: 6 }}>
          <Box large>middle=&quot;xs&quot;</Box>
        </Col>
        <Col breakPoint={{ xs: 6 }}>
          <Box>middle=&quot;xs&quot;</Box>
        </Col>
      </Row>
      <h3>
        <code>.bottom-</code>
      </h3>
      <Row bottom="xs">
        <Col breakPoint={{ xs: 6 }}>
          <Box large>bottom=&quot;xs&quot;</Box>
        </Col>
        <Col breakPoint={{ xs: 6 }}>
          <Box>bottom=&quot;xs&quot;</Box>
        </Col>
      </Row>
    </Container>
  );
}
