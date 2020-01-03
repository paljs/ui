import { Card, CardBody, InputGroup } from '../../../../src';
import React from 'react';

const InputPage = () => {
  return (
    <>
      <h3>There are three input sizes:</h3>
      <Card>
        <header>Input Sizes</header>
        <CardBody>
          <InputGroup fullWidth size="Small" label="Size small">
            <input type="text" />
          </InputGroup>
          <InputGroup fullWidth label="Size Medium">
            <input type="text" />
          </InputGroup>
          <InputGroup fullWidth size="Large" label="Size Large">
            <input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
      <h3>Inputs available in different shapes, which could be combined with the other properties:</h3>
      <Card>
        <header>Input Shapes</header>
        <CardBody>
          <InputGroup fullWidth label="Rectangle border">
            <input type="text" />
          </InputGroup>
          <InputGroup fullWidth shape="SemiRound" label="SemiRound border">
            <input type="text" />
          </InputGroup>
          <InputGroup fullWidth shape="Round" label="Round border">
            <input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
      <h3>Inputs are available in multiple colors using status property:</h3>
      <Card>
        <header>Input Colors</header>
        <CardBody>
          <InputGroup fullWidth status="Info" label="Input with Info">
            <input type="text" />
          </InputGroup>
          <InputGroup fullWidth status="Warning" label="Input with Warning">
            <input name="text" />
          </InputGroup>
          <InputGroup fullWidth status="Success" label="Input with Success">
            <input type="text" />
          </InputGroup>
          <InputGroup fullWidth status="Danger" label="Input with Danger">
            <input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
      <h3>could be applied to the following selectors - input, textarea:</h3>
      <Card>
        <header>Input Elements</header>
        <CardBody>
          <InputGroup fullWidth label="Input">
            <input type="text" />
          </InputGroup>
          <InputGroup fullWidth label="Text Area">
            <textarea />
          </InputGroup>
        </CardBody>
      </Card>
    </>
  );
};
export default InputPage;
