import { Card, CardBody, InputGroup } from 'oah-ui';
import React from 'react';
import styled from 'styled-components';

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

const InputPage = () => {
  return (
    <>
      <h3>There are three input sizes:</h3>
      <Card>
        <header>Input Sizes</header>
        <CardBody>
          <Input fullWidth size="Small">
            <input type="text" placeholder="Size small" />
          </Input>
          <Input fullWidth>
            <input type="text" placeholder="Size Medium" />
          </Input>
          <Input fullWidth size="Large">
            <input type="text" placeholder="Size Large" />
          </Input>
        </CardBody>
      </Card>
      <h3>Inputs available in different shapes, which could be combined with the other properties:</h3>
      <Card>
        <header>Input Shapes</header>
        <CardBody>
          <Input fullWidth>
            <input type="text" placeholder="Rectangle border" />
          </Input>
          <Input fullWidth shape="SemiRound">
            <input type="text" placeholder="SemiRound border" />
          </Input>
          <Input fullWidth shape="Round">
            <input type="text" placeholder="Round border" />
          </Input>
        </CardBody>
      </Card>
      <h3>Inputs are available in multiple colors using status property:</h3>
      <Card>
        <header>Input Colors</header>
        <CardBody>
          <Input fullWidth status="Info">
            <input type="text" placeholder="Input with Info" />
          </Input>
          <Input fullWidth status="Warning">
            <input name="text" placeholder="Input with Warning" />
          </Input>
          <Input fullWidth status="Success">
            <input type="text" placeholder="Input with Success" />
          </Input>
          <Input fullWidth status="Danger">
            <input type="text" placeholder="Input with Danger" />
          </Input>
        </CardBody>
      </Card>
      <h3>could be applied to the following selectors - input, textarea:</h3>
      <Card>
        <header>Input Elements</header>
        <CardBody>
          <Input fullWidth>
            <input type="text" placeholder="Input" />
          </Input>
          <Input fullWidth>
            <textarea placeholder="Text Area" />
          </Input>
        </CardBody>
      </Card>
    </>
  );
};
export default InputPage;
