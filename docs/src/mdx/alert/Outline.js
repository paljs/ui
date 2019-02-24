import React from 'react';
import { Card, CardBody, Alert } from 'oah-ui';

function Outline() {
  return (
    <Card>
      <header>Alert Outline</header>
      <CardBody>
        {[
          'Info',
          'Success',
          'Danger',
          'Primary',
          'Warning',
          'Disabled',
          'Active'
        ].map(key => (
          <Alert key={key} closable outline={key}>
            You have been successfully authenticated!
          </Alert>
        ))}
      </CardBody>
    </Card>
  );
}

export default Outline;
