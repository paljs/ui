import React from 'react';
import { Card, CardBody, Badge } from '../../../../src';

function Example() {
  return (
    <Card>
      <header style={{ position: 'relative' }}>
        <Badge status="Success" position="topRight">
          New
        </Badge>
        <Badge status="Danger" position="bottomLeft">
          +99
        </Badge>
      </header>
      <CardBody>Card body.</CardBody>
    </Card>
  );
}

export default Example;
