import React from 'react';
import { Card, CardBody, Progress } from '../../../../src';

function Status() {
  const style = { marginBottom: '1rem' };
  return (
    <Card>
      <header>Progress Bar Status</header>
      <CardBody>
        {['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Default'].map((key, index) => (
          <Progress key={key} style={style} value={(index + 1) * 20} status={key}>
            {key}
          </Progress>
        ))}
      </CardBody>
    </Card>
  );
}

export default Status;
