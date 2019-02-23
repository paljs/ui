import React from 'react';
import { Checkbox, Row, Col } from 'oah-ui';

function Example() {
  const onChangeCheckbox = value => {
    // value will be true or false
  };
  return (
    <Row>
      <Col xs>
        <Checkbox status="Success" onChange={onChangeCheckbox}>
          Success
        </Checkbox>
      </Col>
      <Col xs>
        <Checkbox status="Danger" onChange={onChangeCheckbox}>
          Danger
        </Checkbox>
      </Col>
      <Col xs>
        <Checkbox status="Warning" onChange={onChangeCheckbox}>
          Warning
        </Checkbox>
      </Col>
      <Col xs>
        <Checkbox disabled>disabled</Checkbox>
      </Col>
    </Row>
  );
}

export default Example;
