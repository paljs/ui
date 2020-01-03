import { Container, Row, Col } from '../../../../src';
import React from 'react';
import Box from './Box';

export default function Offset() {
  return (
    <Container>
      <Row>
        {Array.from(Array(11), v => {
          return (
            <Col key={v} offset={{ xs: 12 - v }} breakPoint={{ xs: v }}>
              <Box row />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
