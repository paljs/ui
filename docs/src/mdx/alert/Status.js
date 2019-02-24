import React from 'react';
import { Card, CardBody, Alert } from 'oah-ui';

function Status() {
  return (
    <Card>
      <header>Alert Status</header>
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
          <Alert key={key} closable status={key}>
            You have been successfully authenticated!
          </Alert>
        ))}
      </CardBody>
    </Card>
  );
}

export default Status;
