import React from 'react';
import { Checkbox, Row, Col } from 'oah-ui';
import { status } from '../shared';

function Example() {
  const onChangeCheckbox = (_: boolean) => {
    // value will be true or false
  };
  return (
    <Row>
      {status.map(key => (
        <Col key={key} breakPoint={{ xs: true }}>
          <Checkbox status={key} onChange={onChangeCheckbox}>
            {key}
          </Checkbox>
        </Col>
      ))}
      <Col breakPoint={{ xs: true }}>
        <Checkbox disabled>disabled</Checkbox>
      </Col>
    </Row>
  );
}

export default Example;
