import React from 'react';
import { Card, CardBody, CardHeader } from 'oah-ui';

export default function Colored() {
  return (
    <>
      <Card status="Success">
        <CardHeader>Card header</CardHeader>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
      <Card status="Primary">
        <CardHeader>Card header</CardHeader>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
      <Card status="Danger">
        <CardHeader>Card header</CardHeader>
        <CardBody>Card basic content container component.</CardBody>
      </Card>
    </>
  );
}
