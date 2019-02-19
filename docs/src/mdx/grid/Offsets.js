import { Container, Row, Col } from 'oah-ui';
import React from 'react';
import Box from './Box';

export default function Offset() {
  return (
    <Container>
      <Row>
        <Col xsOffset={11} xs={1}>
          <Box row />
        </Col>
        <Col xsOffset={10} xs={2}>
          <Box row />
        </Col>
        <Col xsOffset={9} xs={3}>
          <Box row />
        </Col>
        <Col xsOffset={8} xs={4}>
          <Box row />
        </Col>
        <Col xsOffset={7} xs={5}>
          <Box row />
        </Col>
        <Col xsOffset={6} xs={6}>
          <Box row />
        </Col>
        <Col xsOffset={5} xs={7}>
          <Box row />
        </Col>
        <Col xsOffset={4} xs={8}>
          <Box row />
        </Col>
        <Col xsOffset={3} xs={9}>
          <Box row />
        </Col>
        <Col xsOffset={2} xs={10}>
          <Box row />
        </Col>
        <Col xsOffset={1} xs={11}>
          <Box row />
        </Col>
      </Row>
    </Container>
  );
}
