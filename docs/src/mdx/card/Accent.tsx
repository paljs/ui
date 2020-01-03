import React from 'react';
import { Card, CardBody } from '../../../../src';

export default function Colored() {
  return (
    <>
      <Card accent="Success">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
      <Card accent="Primary">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
      <Card status="Danger" accent="Primary">
        <header>Card header</header>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
    </>
  );
}
