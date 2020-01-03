import React, { useState } from 'react';
import { Card, CardBody, Spinner, Button, Col, Row } from '../../../../src';

function ButtonTest() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <Card>
      <CardBody>
        <Row>
          {['Primary', 'Success', 'Danger'].map(key => (
            <Col xs key={key}>
              <Button onClick={onClick} style={{ position: 'relative' }} fullWidth status={key}>
                Primary
                {show && <Spinner status={key} />}
              </Button>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
}

export default ButtonTest;
