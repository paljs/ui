import React from 'react';
import { Card, CardBody, Alert } from 'oah-ui';
import { status } from '../shared';

function Outline() {
  return (
    <Card>
      <header>Alert Outline</header>
      <CardBody>
        {status.map(key => (
          <Alert key={key} closable outline={key}>
            You have been successfully authenticated!
          </Alert>
        ))}
      </CardBody>
    </Card>
  );
}

export default Outline;
