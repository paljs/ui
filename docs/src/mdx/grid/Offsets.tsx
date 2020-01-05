import { Container, Row, Col } from 'oah-ui';
import React from 'react';
import Box from './Box';

export default function Offset() {
  return (
    <Container>
      <Row>
        {Array.from(Array(11), (v, i) => {
          return (
            <Col key={i} offset={{ xs: 11 - i }} breakPoint={{ xs: i + 1 }}>
              <Box row />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
