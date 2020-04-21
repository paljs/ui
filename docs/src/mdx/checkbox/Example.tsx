import React, { useState } from 'react';
import { Checkbox, Row, Col, Card, CardBody, Status } from 'oah-ui';
import { status } from '../shared';

const initState: any = {};
status.forEach((key) => (initState[key] = false));

function Example() {
  const [checkbox, setCheckbox] = useState(initState);
  const onChangeCheckbox = (value: boolean, key: Status) => {
    setCheckbox({ ...checkbox, [key]: value });
  };
  return (
    <Card>
      <header>Checkbox Status</header>
      <CardBody>
        <Row>
          {status.map((key) => (
            <Col key={key} breakPoint={{ xs: true }}>
              <Checkbox checked={checkbox[key]} status={key} onChange={(value) => onChangeCheckbox(value, key)}>
                {key}
              </Checkbox>
            </Col>
          ))}
          <Col breakPoint={{ xs: true }}>
            <Checkbox checked onChange={() => ({})} disabled>
              disabled
            </Checkbox>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default Example;
