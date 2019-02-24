import React from 'react';
import { Card, CardBody, Alert } from 'oah-ui';

function Accent() {
  return (
    <Card>
      <header>Alert Size</header>
      <CardBody>
        <Alert status="Danger" size="XXS">
          You have been successfully authenticated!
        </Alert>
        <Alert status="Primary" size="SM">
          You have been successfully authenticated!
        </Alert>

        <Alert status="Success" size="XXL">
          You have been successfully authenticated!
        </Alert>
      </CardBody>
    </Card>
  );
}

export default Accent;
