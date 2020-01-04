import React from 'react';
import { Card, CardBody } from 'oah-ui';

export default function Colored() {
  return (
    <>
      <Card status="Success">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
      <Card status="Primary">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
      <Card status="Danger">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
    </>
  );
}
