import React from 'react';
import { Card, CardBody } from 'oah-ui';

export default function Colored() {
  return (
    <>
      <Card size="Large">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
      <Card size="Giant">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
    </>
  );
}
