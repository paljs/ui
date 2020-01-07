import { Card, CardBody, InputGroup } from 'oah-ui';
import React from 'react';

const InputPage = () => {
  return (
    <>
      <h3>There are three input sizes:</h3>
      <Card>
        <header>Input Sizes</header>
        <CardBody>
          <InputGroup fullWidth size="Small">
            <input type="text" placeholder="Size small" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="text" placeholder="Size Medium" />
          </InputGroup>
          <InputGroup fullWidth size="Large">
            <input type="text" placeholder="Size Large" />
          </InputGroup>
        </CardBody>
      </Card>
      <h3>Inputs available in different shapes, which could be combined with the other properties:</h3>
      <Card>
        <header>Input Shapes</header>
        <CardBody>
          <InputGroup fullWidth>
            <input type="text" placeholder="Rectangle border" />
          </InputGroup>
          <InputGroup fullWidth shape="SemiRound">
            <input type="text" placeholder="SemiRound border" />
          </InputGroup>
          <InputGroup fullWidth shape="Round">
            <input type="text" placeholder="Round border" />
          </InputGroup>
        </CardBody>
      </Card>
      <h3>Inputs are available in multiple colors using status property:</h3>
      <Card>
        <header>Input Colors</header>
        <CardBody>
          <InputGroup fullWidth status="Info">
            <input type="text" placeholder="Input with Info" />
          </InputGroup>
          <InputGroup fullWidth status="Warning">
            <input name="text" placeholder="Input with Warning" />
          </InputGroup>
          <InputGroup fullWidth status="Success">
            <input type="text" placeholder="Input with Success" />
          </InputGroup>
          <InputGroup fullWidth status="Danger">
            <input type="text" placeholder="Input with Danger" />
          </InputGroup>
        </CardBody>
      </Card>
      <h3>could be applied to the following selectors - input, textarea:</h3>
      <Card>
        <header>Input Elements</header>
        <CardBody>
          <InputGroup fullWidth>
            <input type="text" placeholder="Input" />
          </InputGroup>
          <InputGroup fullWidth>
            <textarea placeholder="Text Area" />
          </InputGroup>
        </CardBody>
      </Card>
    </>
  );
};
export default InputPage;
