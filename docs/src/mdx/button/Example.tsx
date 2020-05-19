import { Row, Col, Card, CardBody, Button, ButtonLink } from 'oah-ui';
import { navigate } from 'gatsby';
import React from 'react';
import { appearance, shape, size, status } from '../shared';

const style = { marginBottom: '1.5rem' };

export default function ButtonPage() {
  return (
    <Row>
      {appearance.map((a) => (
        <Col breakPoint={{ xs: 12 }} key={a}>
          <Card>
            <header>Button {a}</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth appearance={a} status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
      <Col breakPoint={{ xs: 12 }}>
        <Card>
          <header>Button Size</header>
          <CardBody>
            <Row middle="xs">
              {size.map((size) => (
                <Col key={size} style={style} breakPoint={{ xs: true }}>
                  <Button fullWidth size={size}>
                    {size}
                  </Button>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col breakPoint={{ xs: 12 }}>
        <Card>
          <header>Button Shape</header>
          <CardBody>
            <Row middle="xs">
              {shape.map((shape) => (
                <Col key={shape} style={style} breakPoint={{ xs: true }}>
                  <Button fullWidth shape={shape}>
                    {shape}
                  </Button>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col breakPoint={{ xs: 12 }}>
        <Card>
          <header>Button Elements</header>
          <CardBody>
            <Row middle="xs">
              <Col style={style} breakPoint={{ xs: true }}>
                <Button fullWidth shape="Rectangle">
                  Button
                </Button>
              </Col>
              <Col style={style} breakPoint={{ xs: true }}>
                <ButtonLink onClick={() => navigate('/')} fullWidth shape="Rectangle">
                  Link
                </ButtonLink>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
