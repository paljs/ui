import React from 'react';
import { Card, CardBody, Progress } from '../../../../src';

function Value() {
  const style = { marginBottom: '1rem' };
  return (
    <Card>
      <header>Progress Bar Value</header>
      <CardBody>
        <Progress style={style} value={20} displayValue />
        <Progress style={style} value={40}>
          Custom value
        </Progress>
      </CardBody>
    </Card>
  );
}

export default Value;
