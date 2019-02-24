import React from 'react';
import { Card, CardBody, Alert } from 'oah-ui';

function Accent() {
  return (
    <Card>
      <header>Alert Accent</header>
      <CardBody>
        <Alert accent="Danger" status="Success">
          You have been successfully authenticated!
        </Alert>
        <Alert accent="Primary" status="Danger">
          You have been successfully authenticated!
        </Alert>
        <Alert accent="Info" status="Primary">
          You have been successfully authenticated!
        </Alert>
        <Alert accent="Warning" status="Info">
          You have been successfully authenticated!
        </Alert>
        <Alert accent="Danger" status="Warning">
          You have been successfully authenticated!
        </Alert>
        <Alert accent="Disabled" status="Active">
          You have been successfully authenticated!
        </Alert>
        <Alert accent="Success" status="Disabled">
          You have been successfully authenticated!
        </Alert>
      </CardBody>
    </Card>
  );
}

export default Accent;
